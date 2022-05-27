class standard{
    webdesign = '.standards_webdesign a';
    webofdevice = '.standards_webofdevices a';

    getLocator(data){
        if(data === 'webdesign') return this.webdesign;
        else if(data === 'webofdevice') return this.webofdevice;
        else ('Wrong data for locator in Standard page')
    }
}

export default standard;