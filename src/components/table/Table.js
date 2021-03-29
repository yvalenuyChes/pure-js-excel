import { ExcelComponent } from '../../core/ExcelComponent'
import { createTable } from './tableTemplate'
import { resizeHandler } from './tableResize'
import { shouldResize } from './tableFunctions'

export class Table extends ExcelComponent {
	constructor($root) {
		super($root, {
			listeners: ['mousedown']
		})
	}
	static className = 'excel__table'
	toHTML() {
		return createTable(20)
	}

	onMousedown(event) {
		if (shouldResize(event)) {
			resizeHandler(this.$root, event)
		}
	}
}
