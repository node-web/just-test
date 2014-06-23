var tianmaConfigUrl = '';
var deployFileUrl = '';

$('#tianmaSite').on('change', function (e) {
	tianmaConfigUrl = this.value;
});

$('#deployFile').on('change', function (e) {
	deployFileUrl = this.value;
});

