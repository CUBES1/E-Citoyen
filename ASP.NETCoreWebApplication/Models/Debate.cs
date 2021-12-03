using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using ASP.NETCoreWebApplication.Models.Comments;

namespace ASP.NETCoreWebApplication.Models
{
    public class Debate
    {
        public int Id { get; set; }
        public string Title { get; set; }

        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }

        public List<MainComment> MainComments { get; set; }
    }
}