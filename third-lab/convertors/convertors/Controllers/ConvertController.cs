using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using lab3.Models;
using Microsoft.AspNetCore.Mvc;

namespace lab3.Controllers
{
    public class ConvertController : Controller{
        public IActionResult Converter() {
            return View(new convert());
        }

        [HttpPost]
        public IActionResult Converter(convert c, int selectKm)
        {
            if (!(c.InputData > 0))
            {
                c.LonKm = 0; //л на км
                c.Lon10Km = 0; //л на 10 км
                c.Lon100Km = 0;//л на 100 км
                c.KMonL = 0; // км на л
                c.MonG_US = 0; // миль на галлон (сша)
                c.Gon100M_US = 0; //галлонов на 100 миль (сша)
                c.MonG_UK = 0; // миль на галлон (англия)
                c.Gon100M_UK = 0; //галлонов на 100 миль (англия)
            } 
            else if (selectKm == 1) {
                c.LonKm = Math.Round(c.InputData, 3); //л на км
                c.Lon10Km = Math.Round(c.InputData * 10, 3); //л на 10 км
                c.Lon100Km = Math.Round(c.InputData * 100, 3);//л на 100 км
                c.KMonL = Math.Round(1 / c.InputData, 3); // км на л
                c.MonG_US = Math.Round(c.mINkm / (c.InputData * c.gINl),3); // миль на галлон (сша)
                c.Gon100M_US = Math.Round(100 * (c.InputData * c.gINl) / c.mINkm, 3); //галлонов на 100 миль (сша)
                c.MonG_UK = Math.Round(c.mINkm / (c.InputData * c.agINl), 3); // миль на галлон (англия)
                c.Gon100M_UK = Math.Round(100 * (c.InputData * c.agINl) / c.mINkm, 3); //галлонов на 100 миль (англия)
            }
            else if (selectKm == 2) {
                c.LonKm = Math.Round(c.InputData/10,3); //л на км
                c.Lon10Km = Math.Round(c.InputData, 3); //л на 10 км
                c.Lon100Km = Math.Round(c.InputData * 10, 3);//л на 100 км
                c.KMonL = Math.Round(10 / c.InputData, 3); // км на л
                c.MonG_US = Math.Round(c.mINkm * 10 / (c.InputData * c.gINl),3); // миль на галлон (сша)
                c.Gon100M_US = Math.Round(10 * (c.InputData * c.gINl) / c.mINkm, 3); //галлонов на 100 миль (сша)
                c.MonG_UK = Math.Round(c.mINkm * 10 / (c.InputData * c.agINl), 3); // миль на галлон (англия)
                c.Gon100M_UK = Math.Round(10 * (c.InputData * c.agINl) / c.mINkm, 3); //галлонов на 100 миль (англия)
            }
            else if (selectKm == 3)
            {
                c.LonKm = Math.Round(c.InputData / 100, 3); //л на км
                c.Lon10Km = Math.Round(c.InputData/10, 3); //л на 10 км
                c.Lon100Km = Math.Round(c.InputData, 3);//л на 100 км
                c.KMonL = Math.Round(100 / c.InputData, 3); // км на л
                c.MonG_US = Math.Round(c.mINkm * 100 / (c.InputData * c.gINl), 3); // миль на галлон (сша)
                c.Gon100M_US = Math.Round((c.InputData * c.gINl) / c.mINkm, 3); //галлонов на 100 миль (сша)
                c.MonG_UK = Math.Round(c.mINkm * 100 / (c.InputData * c.agINl),3); // миль на галлон (англия)
                c.Gon100M_UK = Math.Round((c.InputData * c.agINl) / c.mINkm, 3); //галлонов на 100 миль (англия)
            }
            else if (selectKm == 4)
            {
                c.LonKm = Math.Round(1 / c.InputData, 3); //л на км
                c.Lon10Km = Math.Round(10/c.InputData, 3); //л на 10 км
                c.Lon100Km = Math.Round(100 / c.InputData, 3);//л на 100 км
                c.KMonL = c.InputData; // км на л
                c.MonG_US = Math.Round(c.InputData * c.lINg / c.kmINm, 3); // миль на галлон (сша)
                c.Gon100M_US = Math.Round(c.kmINm * 100 / (c.InputData * c.lINg),3); //галлонов на 100 миль (сша)
                c.MonG_UK = Math.Round(c.InputData * c.lINag / c.kmINm, 3); // миль на галлон (англия)
                c.Gon100M_UK = Math.Round(c.kmINm * 100 / (c.InputData * c.lINag), 3); //галлонов на 100 миль (англия)
            }
            else if (selectKm == 5)
            {
                c.LonKm = Math.Round(c.lINg / (c.InputData * c.kmINm), 3); //л на км
                c.Lon10Km = Math.Round(c.lINg * 10 / (c.InputData * c.kmINm), 3); //л на 10 км
                c.Lon100Km = Math.Round(c.lINg * 100 / (c.InputData * c.kmINm), 3);//л на 100 км
                c.KMonL = Math.Round(c.InputData * c.kmINm / c.lINg, 3); // км на л
                c.MonG_US = c.InputData; // миль на галлон (сша)
                c.Gon100M_US = Math.Round(100 / c.InputData, 3); //галлонов на 100 миль (сша)
                c.MonG_UK = Math.Round(c.InputData * c.gINag, 3); // миль на галлон (англия)
                c.Gon100M_UK = Math.Round(100 / (c.InputData * c.gINag), 3); //галлонов на 100 миль (англия)
            }
            else if (selectKm == 6)
            {
                c.LonKm = Math.Round(c.InputData * c.lINg / c.kmINm / 100, 3); //л на км
                c.Lon10Km = Math.Round(c.InputData * c.lINg / c.kmINm / 10, 3); //л на 10 км
                c.Lon100Km = Math.Round(c.InputData * c.lINg / c.kmINm, 3);//л на 100 км
                c.KMonL = Math.Round(c.kmINm * 100 / c.InputData / c.lINg, 3); // км на л
                c.MonG_US = Math.Round(100 / (c.InputData), 3); // миль на галлон (сша)
                c.Gon100M_US = c.InputData; //галлонов на 100 миль (сша)
                c.MonG_UK = Math.Round(100 / (c.InputData * c.agINg),3); // миль на галлон (англия)
                c.Gon100M_UK = Math.Round(c.InputData * c.agINg, 3); //галлонов на 100 миль (англия)
            }
            else if (selectKm == 7)
            {
                c.LonKm = Math.Round(c.lINag / c.InputData / c.kmINm, 3); //л на км
                c.Lon10Km = Math.Round(10 * c.lINag / c.InputData / c.kmINm, 3); //л на 10 км
                c.Lon100Km = Math.Round(100 * c.lINag / c.InputData / c.kmINm, 3);//л на 100 км
                c.KMonL = Math.Round(c.InputData * c.kmINm / c.lINag, 3); // км на л
                c.MonG_US = Math.Round(c.InputData * c.agINg, 3); // миль на галлон (сша)
                c.Gon100M_US = Math.Round(100 / c.InputData / c.agINg, 3); //галлонов на 100 миль (сша)
                c.MonG_UK = c.InputData; // миль на галлон (англия)
                c.Gon100M_UK = Math.Round(100 / c.InputData, 3); //галлонов на 100 миль (англия)
            }
            else if (selectKm == 8)
            {
                c.LonKm = Math.Round(c.InputData * c.lINag / c.kmINm / 100, 3); //л на км
                c.Lon10Km = Math.Round(c.InputData * c.lINag / c.kmINm / 10, 3); //л на 10 км
                c.Lon100Km = Math.Round(c.InputData * c.lINag / c.kmINm, 3);//л на 100 км
                c.KMonL = Math.Round(100 * c.kmINm / c.InputData / c.lINag, 3); // км на л
                c.MonG_US = Math.Round(100 / c.InputData * c.agINg, 3); // миль на галлон (сша)
                c.Gon100M_US = Math.Round(c.InputData * c.gINag, 3); //галлонов на 100 миль (сша)
                c.MonG_UK = Math.Round(100 / c.InputData, 3); // миль на галлон (англия)
                c.Gon100M_UK = c.InputData; //галлонов на 100 миль (англия)
            }
            return View(c);
        }
    }
}