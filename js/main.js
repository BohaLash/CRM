// The Best CRM Ever

function toggleTheme() {
    if (document.body.className == 'th1') {
        document.body.className = 'th2';
    } else {
        document.body.className = 'th1';
    }
}

function toggleFilters() {
    if (document.getElementsByClassName('filters')[0].style.display == 'none') {
        document.getElementsByClassName('filters')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('filters')[0].style.display = 'none';
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
document.getElementById('theme').onclick = toggleTheme;
document.getElementsByClassName('filters')[0].style.display = 'none';
document.getElementById('filters').onclick = toggleFilters;
var Cards = new CardMeneger($('.result>table'))