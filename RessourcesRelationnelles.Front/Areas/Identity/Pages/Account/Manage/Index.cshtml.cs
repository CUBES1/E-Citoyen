using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RessourcesRelationnelles.Api.Models;
using RessourcesRelationnelles.Api.Models;

namespace RessourcesRelationnelles.Front.Areas.Identity.Pages.Account.Manage
{
    public partial class IndexModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public IndexModel(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public string Username { get; set; }

        [TempData]
        public string StatusMessage { get; set; }

        [BindProperty]
        public InputModel Input { get; set; }

        public class InputModel
        {
            [EmailAddress]
            [Display(Name = "Email")]
            public string Email { get; set; }
            
            [Display(Name = "Prénom")]
            public string? FirstName { get; set; }
      
            [Display(Name = "Nom de famille")]
            public string? LastName { get; set; }
            
            [Display(Name = "Pays")]
            public string Country { get; set; }
            
            [Display(Name = "Région")]
            public string? Region { get; set; }
        
            [Display(Name = "Ville")]
            public string? City { get; set; }
        
            [Display(Name = "Date de naissance")]
            [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
            [DataType(DataType.Date)]
            public DateTime DateOfBirth { get; set; }
            
            [Phone]
            [Display(Name = "Phone number")]
            public string PhoneNumber { get; set; }
            
            [Display(Name = "Profile Picture")]
            public byte[] ProfilePicture { get; set; }
        }

        private async Task LoadAsync(ApplicationUser user)
        {
            var userName = await _userManager.GetUserNameAsync(user);
            var phoneNumber = await _userManager.GetPhoneNumberAsync(user);
            var firstName = user.FirstName;
            var lastName = user.LastName;
            var country = user.Country;
            var region = user.Region;
            var city = user.City;
            var profilePicture = user.ProfilePicture;
            Username = userName;

            Input = new InputModel
            {
                PhoneNumber = phoneNumber,
                FirstName = firstName,
                LastName = lastName,
                Country = country,
                Region = region,
                City = city,
                ProfilePicture = profilePicture
            };
        }

        public async Task<IActionResult> OnGetAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            await LoadAsync(user);
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return NotFound($"Unable to load user with ID '{_userManager.GetUserId(User)}'.");
            }

            if (!ModelState.IsValid)
            {
                await LoadAsync(user);
                return Page();
            }
            
            var firstName = user.FirstName;
            var lastName = user.LastName;
            var country = user.Country;
            var region = user.Region;
            var city = user.City;
            var birthDate = user.DateOfBirth;
            
            if (Request.Form.Files.Count > 0)
            {
                IFormFile file = Request.Form.Files.FirstOrDefault();
                using (var dataStream = new MemoryStream())
                {
                    await file.CopyToAsync(dataStream);
                    user.ProfilePicture = dataStream.ToArray();
                }
                await _userManager.UpdateAsync(user);
            }
            
            if (Input.FirstName != firstName)
            {
                user.FirstName = Input.FirstName;
                await _userManager.UpdateAsync(user);
            }
            if (Input.LastName != lastName)
            {
                user.LastName = Input.LastName;
                await _userManager.UpdateAsync(user);
            }
            if (Input.Country != country)
            {
                user.Country = Input.Country;
                await _userManager.UpdateAsync(user);
            }
            if (Input.Region != region)
            {
                user.Region = Input.Region;
                await _userManager.UpdateAsync(user);
            }
            if (Input.City != city)
            {
                user.City = Input.City;
                await _userManager.UpdateAsync(user);
            }
            if (Input.DateOfBirth != birthDate)
            {
                user.DateOfBirth = Input.DateOfBirth;
                await _userManager.UpdateAsync(user);
            }

            var phoneNumber = await _userManager.GetPhoneNumberAsync(user);
            if (Input.PhoneNumber != phoneNumber)
            {
                var setPhoneResult = await _userManager.SetPhoneNumberAsync(user, Input.PhoneNumber);
                if (!setPhoneResult.Succeeded)
                {
                    StatusMessage = "Unexpected error when trying to set phone number.";
                    return RedirectToPage();
                }
            }

            await _signInManager.RefreshSignInAsync(user);
            StatusMessage = "Your profile has been updated";
            return RedirectToPage();
        }
    }
}
