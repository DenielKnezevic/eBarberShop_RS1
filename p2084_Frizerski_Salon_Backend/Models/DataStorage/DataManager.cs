﻿using Models.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DataStorage
{
    public class DataManager
    {
        public static List<ChartModel> GetData()
        {
            var r = new Random();
            return new List<ChartModel>()
        {
            new ChartModel { Data = new List<int> { r.Next(1, 40) }, Label = "Data1", BackgroundColor = "#5491DA" },
            new ChartModel { Data = new List<int> { r.Next(1, 40) }, Label = "Data2", BackgroundColor = "#E74C3C" },
            new ChartModel { Data = new List<int> { r.Next(1, 40) }, Label = "Data3", BackgroundColor = "#82E0AA" },
            new ChartModel { Data = new List<int> { r.Next(1, 40) }, Label = "Data4", BackgroundColor = "#E5E7E9" }
        };
        }
    }
}
