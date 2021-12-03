using System.Collections.Generic;

namespace ASP.NETCoreWebApplication.Models.Comments
{
    public class MainComment : Comment
    {
        public List<SubComment> SubComments { get; set; }
    }
}
