class htmlCss {
  Css = ".intro > a:nth-child(2)";
  Graphics = ".intro > a:nth-child(5)";
  Scripting = ".intro > a:nth-child(6)";
  Html = ".intro > a:nth-child(1)";
  Xstl = "p:nth-child(7) > a:nth-child(2)";
  Html_Css_Tutorial = "p:nth-child(19) > a";
  Jd_Supra = "dd:nth-child(2) cite";
  infoQ = "dd:nth-child(4) cite";
  Security_Boulevard = "dd:nth-child(6) cite";
  Payment_Source = "dd:nth-child(8) cite";


  getLocator(data){
    if(data === 'Css') return this.Css;
    else if(data === 'Graphics') return this.Graphics;
    else if(data === 'Scripting') return this.Scripting;
    else if(data === 'Html') return this.Html;
    else if(data === 'Xstl') return this.Xstl;
    else if(data === 'Html_Css_Tutorial') return this.Html_Css_Tutorial;
    else if(data === 'Jd_Supra') return this.Jd_Supra;
    else if(data === 'infoQ') return this.infoQ;
    else if(data === 'Security_Boulevard') return this.Security_Boulevard;
    else if(data === 'Payment_Source') return this.Payment_Source;
    else ('Wrong data for locator in HtmlCss page');
  }

}

export default htmlCss;
