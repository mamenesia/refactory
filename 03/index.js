class Cart {
	constructor() {
		this.items = []
	}
	addItem(data) {
		let item = {
			item_id: data.item_id,
			price: data.price,
			quantity: data.quantity || 1
		}
		return this.items.push(item)
	}

	removeItem(data) {
		this.items = this.items.filter(item => item.item_id !== data.item_id)
	}
	totalItems() {
		console.log(this.items.length)
		return this.items.length
	}
	totalQuantity() {
		let total = 0
		this.items.map(item => {
			total += item.quantity
		})
		return total
	}
	totalPrice() {
		let totalPrice = 0
		this.items.map(item => {
			totalPrice += item.price
		})
		return totalPrice
	}
	showAll() {
		console.log(this.items)
		return this.items
	}
	checkout() {}
}

const cart = new Cart()
cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
cart.addItem({ item_id: 2, price: 10000 })
cart.addItem({ item_id: 3, price: 5000, quantity: 2 })
cart.removeItem({ item_id: 2 })
cart.addItem({ item_id: 4, price: 400, quantity: 6 })
cart.totalItems()
cart.showAll()
