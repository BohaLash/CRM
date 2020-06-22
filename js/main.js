// function showFilters() {
// 	var f = document.getElementByClassName("filters")
// 	if (f.style.display === "none") {
// 		f.style.display = "block";
// 	} else {
// 		f.style.display = "none";
// 	}
// }

// function theme() {
// 	$('button, section, input').css({
// 		"box-shadow":"0 0 30px #000",
//   		"background":"#171717"
//   	})
// 	$('body').css({
//   		"background":"#111",
//   		"color":"#fff"
//   	})
// 	$('svg').css({
//   		"fill":"#fff"
//   	})

// }

class TriggerTheame {
    constructor(el) {
        this.el = el;
        this.el.trigger = this;
        this.status = false;
        this.el.click((e)=>this.onclick(e))
    }
    onTrue() {
        $('button, section:not(.search), input').css({
            "box-shadow": "0 0 30px #000",
            "background": "#171717"
        })
        $('body').css({
            "background": "#111",
            "color": "#fff"
        })
        $('svg').css({
            "fill": "#fff"
        })
    }
    onFalse() {
        $('button, section, input').css({
            "box-shadow": "",
            "background": ""
        })
        $('body').css({
            "background": "",
            "color": ""
        })
        $('svg').css({
            "fill": ""
        })
    }
    onclick(e) {
        if (this.status) {
            this.onFalse();

            this.status = false;
        } else {
            this.onTrue()

            this.status = true;
        }
    }
}
class CardMeneger {
    constructor(table) {
        this.opened = false
        table.find("tr").click((e)=>this.rowClicked(e));
        $("body").click((e)=>this.close());
        $(".card").click(e=>e.stopPropagation())
    }
    rowClicked(e) {
        if (this.opened == false) {
            $('.card').css("display", "block")
            this.opened = true;
            e.stopPropagation()


        }
    }
    close() {
        this.opened = false;
        $('.card').css("display", "none")

    }
}
var theameTrigger = new TriggerTheame($(".theme"))
var Cards = new CardMeneger($('.result>table'))
