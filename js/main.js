// The Best CRM Ever

class CardMeneger {
    constructor(table) {
        this.opened = false
        table.find("tr").click((e) => this.rowClicked(e));
        $("body").click((e) => this.close());
        $(".profile").click(e => e.stopPropagation())
    }
    rowClicked(e) {
        if (this.opened == false) {
            $('.profile').css("display", "block")
            this.opened = true;
            e.stopPropagation()
        }
    }
    close() {
        $('.profile').css("display", "none")
        this.opened = false;
    }
}

var Cards = new CardMeneger($('.result>table'))