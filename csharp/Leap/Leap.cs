using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public class Year
    {
        public bool IsLeap(int year)
        {
            if (year % 4 == 0)
            {
                return true;
            } else 
            {
                return false;
            }
        }
    }
}