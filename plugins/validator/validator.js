'use strict';

class Validator {
	constructor({ selector, pattern = {}, method }) {
		this.form = document.querySelector(selector);
		this.pattern = pattern;
		this.method = method;
		this.elementsForm = [...this.form.elements].filter(item => {
			return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
		});
		this.error = new Set();
	}

	init() {
		this.applyStyle();
		this.setPattern();
		this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
		this.form.addEventListener('submit', event => {
			event.preventDefault();
			this.elementsForm.forEach(elem => this.checkIt({ target: elem }));
			if (this.error.size) {
				event.preventDefault();
			}
		});
	}

	isValid(elem) {

		const validatorMethod = {

			notEmpty(elem) {
				if (elem.value.trim() === '') {
					return false;
				}
				return true;
			},

			pattern(elem, pattern) {
				return pattern.test(elem.value);
			}

		};

		if (this.method) {

			const method = this.method[elem.id];
			
			if (method) {
				return method.every( item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
			}

		} else {
			console.warn('Необходимо передать id полей ввода и методы проверки этих полей')
		}

		return true;
	}

	checkIt(event) {

		const target = event.target;

		if (this.isValid(target)) {
			this.showSuccess(target);
			this.error.delete(target);
		} else {
			this.showError(target);
			this.error.add(target);
		}
	}

	showError(elem) {
		elem.classList.remove('success');
		elem.classList.add('error');

		if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
			return;
		}

		const errorDid = document.createElement('div');
		errorDid.textContent = 'Ошибка в этом поле';
		errorDid.classList.add('validator-error');
		elem.insertAdjacentElement('afterend', errorDid);
	}

	showSuccess(elem) {
		elem.classList.remove('error');
		elem.classList.add('success');

		if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
			elem.nextElementSibling.remove();
		}
	}

	applyStyle() {
		const style = document.createElement('style');
		style.textContent = `
			input.success {
				border: 2px solid green;
			}
			input.error {
				border: 2px solid red;
			}
			.validator-error {
				font-size: 12px;
				font-family: sans-serif;
				color: red;
			}
		`;
		document.head.append(style);
	}

	setPattern() {
		if (!this.pattern.phone) {
			this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
		}

		if (!this.pattern.email) {
			this.pattern.email = /^\w+@\w+\.\w{2,}$/;
		}
	}

}

const formsValid = () => {

	const forms = document.querySelectorAll('form');

	forms.forEach(form => {
		const selector = form.id;

		const valid = new Validator({
			selector: `#${selector}`,
			pattern: {
				name: /^[а-яё]+$/i,
				message: /^[а-яё]+$/i,
			},
			method: { 
				[`${selector}-name`]: [ // id инпута
					['notEmpty'],
					['pattern', 'name']
				],
				'form2-message': [ // id инпута
					['notEmpty'],
					['pattern', 'message']
				],
			}
		});
		
		valid.init();
	});
};

formsValid();