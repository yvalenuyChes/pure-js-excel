import { DomListener } from '@core/DomListener'

export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.emitter = options.emitter
		this.unsubscibers = []

		this.prepare()
	}

	prepare() {

	}

	// Возвращает шаблон компонента
	toHTML() {
		return ''
	}

	$emit(event, ...args) {
		this.emitter.emit(event, ...args)
	}

	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubscibers.push(unsub)
	}

	init() {
		this.initDomListeners()
		this.unsubscibers.forEach(unsub => unsub())
	}

	destroy() {
		this.removeDomListeners()
	}
}
