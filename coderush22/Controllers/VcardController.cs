﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace coderush22.Controllers
{
    public class VcardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}