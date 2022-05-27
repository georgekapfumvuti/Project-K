class multimodalAccess {
  What_is_Multimodal_Access = ".w3c_toc > li:nth-child(2) > a";
  Capabilities_of_Multimodal_Access = ".w3c_toc > li:nth-child(3) > a";
  Examples = ".w3c_toc > li:nth-child(4) > a";
  Learn_More = ".w3c_toc > li:nth-child(5) > a";

  getLocator(data) {
    if (data === "What_is_Multimodal_Access") return this.What_is_Multimodal_Access;
    else if (data === "Capabilities_of_Multimodal_Access") return this.Capabilities_of_Multimodal_Access;
    else if (data === "Examples") return this.Examples;
    else if (data === "Learn_More") return this.Learn_More;
    else "Wrong data for locator in Muiltimodal Access page";
  }
}

export default multimodalAccess;
