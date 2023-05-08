

export function disableForms(id: string){
    const exampleModalToggle_ = document.getElementById(id) as HTMLElement;
    const shadow = document.getElementsByClassName("modal-backdrop fade show")[0];
    const body_ = document.getElementsByTagName("body")[0] as HTMLElement;

    exampleModalToggle_.removeAttribute("role");
    exampleModalToggle_.removeAttribute("aria-modal");
    exampleModalToggle_.setAttribute('aria-hidden', 'true');
    exampleModalToggle_.style.display = "none";
    exampleModalToggle_.setAttribute('class','modal fade');

    shadow.remove()
    body_.removeAttribute('class')
    body_.removeAttribute('style')
    body_.removeAttribute('wfd-invisible')
}

