var mINkm = 0.62137;
var kmINm = 1.60934;
var gINl = 0.26417;
var lINg = 3.78541;
var agINl = 0.21997;
var lINag = 4.54609;
var agINg = 0.83267;
var gINag = 1.20095;

var options = [
	{text:'Метрический', disabled:'disabled'},
	{text:'Литров на км', value:'1'},
	{text:'Литров на 10 км', value:'2'},
	{text:'Литров на 100 км', value:'3'},
	{text:'Километров на литр', value:'4'},
	{text:'US (США)', disabled: 'disabled'},
	{text:'Миль на галон', value:'5'},
	{text:'Галонов на 100 миль', value:'6'},
	{text:'UK (Англия)', disabled: 'disabled'},
	{text:'Миль на галон', value:'7'},
	{text:'Галонов на 100 миль', value:'8'}
];

$(document).ready(function(){
	/*цикл foreach с jquery селектором. работает так же как цикл ниже	
	options.forEach(function(item, i, arr){
		$('#selectKm').append('<option value="'+ arr[i].value +'" ' + arr[i].disabled+ '>' + arr[i].text + '</option>');
	});*/

	/*цикл jquery с селектором jqury*/
	$.each(options, function(index, value){
		$('#selectKm').append('<option value="'+ value['value'] +'" ' + value['disabled'] + '>' + value['text'] + '</option>');
	});

	$('#inputData').keyup(function(){
		recalculation();
	});
	$('#selectKm').change(function(){
		recalculation();
	});
});

/*recalculation - перерасчет*/
function recalculation(){
	var select = $('#selectKm').val();
	var inputData = $('#inputData').val();
	//   из л на км в ...
	if (select == 1){
		$('#1').html(inputData); //л на км
		$('#2').html((inputData*10).toFixed(3)); //л на 10 км
		$('#3').html((inputData*100).toFixed(3));//л на 100 км
		$('#4').html((1/inputData).toFixed(3)); // км на л
		$('#5').html((mINkm/(inputData*gINl)).toFixed(3)); // миль на галлон (сша)
		$('#6').html((100*(inputData*gINl)/mINkm).toFixed(3)); //галлонов на 100 миль (сша)
		$('#7').html((mINkm/(inputData*agINl)).toFixed(3)); // миль на галлон (англия)
		$('#8').html((100*(inputData*agINl)/mINkm).toFixed(3)); //галлонов на 100 миль (англия)
		}
	//из литров на 10 км в ...
	if (select == 2){
		$('#1').html((inputData/10).toFixed(3)); //л на км
		$('#2').html(inputData); //л на 10 км
		$('#3').html((inputData*10).toFixed(3)); //л на 100 км
		$('#4').html((10/inputData).toFixed(3)); // км на л
		$('#5').html((mINkm*10/(inputData*gINl)).toFixed(3)); // миль на галлон (сша)
		$('#6').html((10*(inputData*gINl)/mINkm).toFixed(3)); //галлонов на 100 миль (сша)
		$('#7').html((mINkm*10/(inputData*agINl)).toFixed(3)); // миль на галлон (англия)
		$('#8').html((10*(inputData*agINl)/mINkm).toFixed(3)); //галлонов на 100 миль (англия)
		}

	//из литров на 100 км в ...
	if (select == 3){
		$('#1').html((inputData/100).toFixed(3)); //л на км
		$('#2').html((inputData/10).toFixed(3)); //л на 10 км
		$('#3').html(inputData); //л на 100 км
		$('#4').html((100/inputData).toFixed(3)); // км на л
		$('#5').html((mINkm*100/(inputData*gINl)).toFixed(3)); // миль на галлон (сша)
		$('#6').html(((inputData*gINl)/mINkm).toFixed(3)); //галлонов на 100 миль (сша)
		$('#7').html((mINkm*100/(inputData*agINl)).toFixed(3)); // миль на галлон (англия)
		$('#8').html(((inputData*agINl)/mINkm).toFixed(3)); //галлонов на 100 миль (англия)
		}

	if (select == 4){
		$('#1').html((1/inputData).toFixed(3));
		$('#2').html((10/inputData).toFixed(3));
		$('#3').html((100/inputData).toFixed(3));
		$('#4').html(inputData);
		$('#5').html((inputData*lINg/kmINm).toFixed(3));
		$('#6').html((kmINm*100/(inputData*lINg)).toFixed(3));
		$('#7').html((inputData*lINag/kmINm).toFixed(3));
		$('#8').html((kmINm*100/(inputData*lINag)).toFixed(3));
		}

	if (select == 5){
		$('#1').html((lINg/(inputData*kmINm)).toFixed(3));
		$('#2').html((lINg*10/(inputData*kmINm)).toFixed(3));
		$('#3').html((lINg*100/(inputData*kmINm)).toFixed(3));
		$('#4').html((inputData*kmINm/lINg).toFixed(3));
		$('#5').html(inputData);
		$('#6').html((100/inputData).toFixed(3));
		$('#7').html((inputData*gINag).toFixed(3));
		$('#8').html((100/(inputData*gINag)).toFixed(3));
		}

	if (select == 6){
		$('#1').html((inputData*lINg/kmINm/100).toFixed(3));
		$('#2').html((inputData*lINg/kmINm/10).toFixed(3));
		$('#3').html((inputData*lINg/kmINm).toFixed(3));
		$('#4').html((kmINm*100/inputData/lINg).toFixed(3));
		$('#5').html((100/(inputData)).toFixed(3));
		$('#6').html(inputData);
		$('#7').html((100/(inputData*agINg)).toFixed(3));
		$('#8').html((inputData*agINg).toFixed(3));
		}

	if (select == 7){
		$('#1').html((lINag/inputData/kmINm).toFixed(3));
		$('#2').html((10*lINag/inputData/kmINm).toFixed(3));
		$('#3').html((100*lINag/inputData/kmINm).toFixed(3));
		$('#4').html((inputData*kmINm/lINag).toFixed(3));
		$('#5').html((inputData*agINg).toFixed(3));
		$('#6').html((100/inputData/agINg).toFixed(3));
		$('#7').html(inputData);
		$('#8').html((100/inputData).toFixed(3));
		}

	if (select == 8){
		$('#1').html((inputData*lINag/kmINm/100).toFixed(3));
		$('#2').html((inputData*lINag/kmINm/10).toFixed(3));
		$('#3').html((inputData*lINag/kmINm).toFixed(3));
		$('#4').html((100*kmINm/inputData/lINag).toFixed(3));
		$('#5').html((100/inputData*agINg).toFixed(3));
		$('#6').html((inputData*gINag).toFixed(3));
		$('#7').html((100/inputData).toFixed(3));
		$('#8').html(inputData);
		}

	if (!(inputData>0)){
		$('.data-result').html(0);
		}		
};
