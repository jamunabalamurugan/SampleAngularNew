//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Airline_Registration_.Models
{
    using System;
    
    public partial class Payment_Result
    {
        public long CardNumber { get; set; }
        public string CardType { get; set; }
        public int ExpiryDate { get; set; }
        public int ExpiryYear { get; set; }
        public Nullable<int> cvv { get; set; }
    }
}
