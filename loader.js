class injector {
	static init() {
		$('body')['append'](`<script type='text/javascript' id ='hax' src='https://vidner.github.io/hslo-v5/bundle.js?v=${Date.now()}'></script>`);
		$('body')['append'](`<link rel="stylesheet" type="text/css" href="https://vidner.github.io/hslo-v5/bundle.css?v=${Date.now()}">`);
		$('div.message')['text']('LOADING EXTENSION CORE...');
	};
};
