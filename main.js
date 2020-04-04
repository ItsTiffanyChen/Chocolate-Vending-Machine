// coins in wallet
Vue.component("coin", {
  props: ["coin"],
  template: `<div :class="coin.class" draggable="true" @dragstart="dragstart" @dragend="dragend" :data-amount="coin.amount"><p>{{ coin.text }}</p></div>`,
  methods: {
    dragstart(e) {
      this.$emit("dragstart", e);
    },
    dragend(e) {
      this.$emit("dragend", e);
    }
  }
});

// each chocolate item
Vue.component("item", {
  props: ["item"],
  template: `<div class="item" @click="addToCart"><div><img :src="item.img"></div><button>{{ item.name }}<br>{{"$" + item.price}}</button></div>`,
  methods: {
    addToCart() {
      this.$emit("add-item", this.item);
    }
  }
});

let app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        name: "KitKat",
        price: 2.5,
        img:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcHZc3kWrJzGKBT-uIrd9FvUHd4AmfhDnCR4eKtfwqeffeMOzwi-5uhh_Hkio5M-2nkscPkp4L5G7ReKQ4KSVY7u_j4H6MYLPJ8TxV5g9NHJvrC1Zja0gC&usqp=CAc"
      },
      {
        name: "M&M",
        price: 2.5,
        img:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLUIiSr-XFC4TqzLr2t3ewj4NXHRO0-pZK2fIcRjKhpefSpX_Ybz3n2yABvFvMQifCG4YT9TIFK3q8fFBH3twICPxYTQYe9YlEKw2sCHMOmk6fpHgMG28uhg&usqp=CAc"
      },
      {
        name: "Snickers",
        price: 2.25,
        img:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTywlTzdAw2PHHRrhbF0WxYI11poECzS_1rFm_VmJQbo1Fk7JeWwIUEPL_ryT1Y7R7yPhhN338ROWcGJLWYRFpJ4vfeWg18vZl5Z4uZgBNz4DgBfcfFPrAH&usqp=CAc"
      },
      {
        name: "Reese's",
        price: 2,
        img:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTi9g0tDpp_GWiADaPgjM8JBuKsvyMte9b84-ex3uNsaCTEppC73Dyd9ciXIjkB1RTOCqWrK9RSKL9mcOkOcZGPSuN93IX10SXmsl1PJzjwQTURvQeSh-FW&usqp=CAc"
      },
      {
        name: "Hershey's",
        price: 2.8,
        img:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4eqZlIRs768-aE_fA1BHAvoIEVE8Uagsklf-OtDUkK0Lv1KWfoYqOX2VEtgbvMT-KbuWFZg7c0FZSOt5VvPqKtKfFzDkK-OKx1eR7_Rn53jm7v8DF9T_j&usqp=CAc"
      },
      {
        name: "Godiva",
        price: 3.5,
        img:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKvVxp64bIIlHpxiEJft4-jiX75iwWHOVsruDucAgxsxI2vq4d3cdzDQ02ReNDUZ__UKBP_XbzP3wayaq4Gr-u8IVlewJlX8vyPsqGUwh322uQtJNwjICmDg&usqp=CAc"
      },
      {
        name: "Lindt",
        price: 4.25,
        img:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7nGFvB9AaBqce-s3_BrjjJOANlXL8JEgTKxmLfCjM3Hp-bIezWw1Fc_EXRNBWsh6NrP8_xj1FBK1WRMkefg77Kz9XEB91cjKN_csGx3nkuTeRuJkeOc_J&usqp=CAc"
      },
      {
        name: "Twix",
        price: 2.5,
        img:
          "data:image/jpeg;base64,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"
      },
      {
        name: "Galaxy",
        price: 2.25,
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR1TlYM-Yjmc7_iCz-o_tsOgwNIyv_v9cExmFD_ySruBdziv3xafC1JccOIX3yVS9WewpHX3qKVag&usqp=CAc"
      },
      {
        name: "Ghirardelli",
        price: 4.5,
        img: "https://i5.walmartimages.com/asr/4bd28ab9-c931-490d-8a09-d1c9e641d019_1.434e9ef66c6e630addf6a5c1476c69f6.jpeg"
      },
      {
        name: "Toblerone",
        price: 3,
        img:
          "data:image/png;base64,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"
      },
      {
        name: "Milka",
        price: 2.5,
        img:
          "data:image/webp;base64,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"
      }
    ],
    coins: [
      {
        amount: 1,
        text: "$1",
        class: "dollar"
      },
      {
        amount: 0.25,
        text: "25¢",
        class: "quarter"
      },
      {
        amount: 0.1,
        text: "10¢",
        class: "dime"
      },
      {
        amount: 0.05,
        text: "5¢",
        class: "nickel"
      },
      {
        amount: 0.01,
        text: "1¢",
        class: "cent"
      }
    ],
    selectedItem: null,
    cashInserted: 0,
  },
  computed: {
    // text above cash slot
    cashStatus() {
      if (!this.cashInserted) {
        return "Insert cash below";
      } else if (this.cashInserted >= this.selectedItem.price) {
        return "Enjoy!";
      } else {
        return `Inserted \$${this.cashInserted}`;
      }
    },
    isCheckedOut() {
      if (this.selectedItem != null) {
        if (this.cashInserted >= this.selectedItem.price) return true;
        return false;
      } else {
        return false;
      }
    },
    runningText() {
      if (this.selectedItem == null) {
        return "Please select an item"
      } else if (this.cashInserted < this.selectedItem.price) {
        return "Please insert cash (exceeded amount goes to tip)"
      } else if (this.cashInserted == this.selectedItem.price){
        return "Please remember to pick up your item"
      } else {
        return `Please remember to pick up your item (thanks for the \$${(this.cashInserted - this.selectedItem.price).toFixed(2)} tip!)`
      }
    },
    // item-drop animation
    checkoutStyle() {
      if (this.cashInserted >= this.selectedItem.price) {
        return `animation: drop 0.5s forwards`
      }
    }
  },
  methods: {
    // only purchase one item at a time
    addToCart(item) {
      if (this.selectedItem != null && this.cashInserted >= this.selectedItem.price) {
        alert(`You haven't picked up your ${this.selectedItem.name}!`);
      } else {
        this.selectedItem = item;
      }
    },
    dragstart(e) {
      this.draggedItem = e.target;
      this.draggedCash = this.draggedItem.getAttribute("data-amount");
      setTimeout(() => {
        this.draggedItem.style.display = "none";
      }, 0);
    },
    dragend(e) {
      setTimeout(() => {
        this.draggedItem.style.display = "block";
        this.draggedItem = null;
      }, 0);
    },
    dragover(e) {
      e.preventDefault();
      e.currentTarget.style.backgroundColor = "#8c8f91"
    },
    dragleave(e) {
      e.currentTarget.style.backgroundColor = "#d7dde0"
    },
    dragenter(e) {
      e.preventDefault();
    },
    drop(e) {
      if (this.selectedItem != null) {
        // doing all this because js adds numbers in really weird ways
        this.cashInserted += Math.ceil(parseFloat(
          this.draggedItem.getAttribute("data-amount")
        ) * 100) / 100;
        this.cashInserted = Math.ceil(parseInt(this.cashInserted * 100)) / 100;
      };
      e.currentTarget.style.backgroundColor = "#d7dde0"
    },
    pickUp() {
      this.selectedItem = null;
      this.cashInserted = 0;
    }
  }
});
