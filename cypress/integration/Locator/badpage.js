class badpage{
    W3C_Homepage = '.show_items a:nth-child(1)';
    SiteMap = 'li > a:nth-child(2)';
    W3C_Webmaster_FAQ = 'p:nth-child(3) > a';

    getLocator(data){
        if(data === 'W3C_Homepage') return this.W3C_Homepage;
        else if(data === 'SiteMap') return this.SiteMap;
        else if(data === 'W3C_Webmaster_FAQ') return this.W3C_Webmaster_FAQ;
        else ('Wrong data for locator in badpage')
    }
}

export default badpage;