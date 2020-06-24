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
        document.getElementsByClassName('resp')[0].style.width = 'calc(100% - 100px)';
        document.getElementsByClassName('resp')[1].style.width = '50px';
        document.getElementsByClassName('resp')[1].style.paddingTop = '14px';
    } else {
        document.getElementsByClassName('filters')[0].style.display = 'none';
        document.getElementsByClassName('resp')[0].style.width = '';
        document.getElementsByClassName('resp')[1].style.width = '';
        document.getElementsByClassName('resp')[1].style.paddingTop = '';
    }
}

document.getElementById('theme').onclick = toggleTheme;
document.getElementsByClassName('filters')[0].style.display = 'none';
document.getElementById('filters').onclick = toggleFilters;

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

var Cards = new CardMeneger($('.result>table'))