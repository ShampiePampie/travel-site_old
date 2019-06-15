import $ from 'jquery';

class Modal{
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModelButton = $(".modal__close");
        this.events();
    }

    events(){
        //clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));

        //clicking the x close modal button
        this.closeModelButton.click(this.closeModel.bind(this));

        //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeModel();
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");

        //don't scroll up after clicking
        return false;
    }

    closeModel(){
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;