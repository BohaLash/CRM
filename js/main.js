function toggleTheme() {
    current = document.body.className
    if (current == "th1") {
        document.body.className = "th2";
    } else {
        document.body.className = "th1";
    }
}

class CardMeneger {
    constructor(table) {
        this.opened = false
        table.find("tr").click((e) => this.rowClicked(e));
        $("body").click((e) => this.close());
        $(".card").click(e => e.stopPropagation())
    }
    rowClicked(e) {
        if (this.opened == false) {
            $('.card').css("display", "block")
            this.opened = true;
            e.stopPropagation()
        }
    }
    close() {
        $('.card').css("display", "none")
        this.opened = false;
    }
}

$("#theme").click(toggleTheme)
var Cards = new CardMeneger($('.result>table'))