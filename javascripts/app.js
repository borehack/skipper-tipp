
// https://code.google.com/p/google-diff-match-patch/
var dmp = new diff_match_patch();
function srcCheck() {
	  dmp.Diff_Timeout = 1;
	  dmp.Diff_EditCost = 4;

	  var expected = srctexts[getIndex(false)];
	  var actual = document.getElementById('src-actual').value;
	  
	  var d = dmp.diff_main(actual, expected);

	    dmp.diff_cleanupSemantic(d);
	  var ds = dmp.diff_prettyHtml(d);
	
	
	document.getElementById('src-diff').innerHTML = ds;
}

function srcNext() {
	var num = document.getElementById('number').value;
	
	num++;
	if (num > 27) {
		num = 1;
	}
	
	document.getElementById('number').selectedIndex = num - 1;
	
	showQuestion();
}

function showQuestion() {
	document.getElementById('src-text').innerHTML = srctexts[getIndex(true)];	
	document.getElementById('src-diff').innerHTML = '';
	document.getElementById('src-actual').value = '';
	document.getElementById('src-actual').focus();
}

function getIndex(real) {
	var num = document.getElementById('number').value;
	var de = 'DE' == document.getElementById('lang').value;
	if ((de && real) || (! de && ! real)) {
		return num * 4 - 2;	
	} else {
		return num * 4 - 1;	
	}
}

showQuestion();
