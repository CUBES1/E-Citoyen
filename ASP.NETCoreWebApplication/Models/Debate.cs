using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ASP.NETCoreWebApplication.Models.Comments;

namespace ASP.NETCoreWebApplication.Models
{
    public class Debate
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Title { get; set; }

        [DataType(DataType.Date)]
        public DateTime? ReleaseDate { get; set; }
        public string? Genre { get; set; }

        //public List<MainComment>? MainComments { get; set; }
    }
}