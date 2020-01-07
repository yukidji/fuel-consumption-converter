var mINkm = 0.62137;
var kmINm = 1.60934;
var gINl = 0.26417;
var lINg = 3.78541;
var agINl = 0.21997;
var lINag = 4.54609;
var agINg = 0.83267;
var gINag = 1.20095;

new Vue({
		el:'#content',
		data: {
			result1:'0',
			result2:'0',
			result3:'0',
			result4:'0',
			result6:'0',
			result7:'0',
			result9:'0',
			result10:'0',

			options:[
				{text:'Метрический', disabled:'disabled'},
				{text:'Литров на км', value:'1'},
				{text:'Литров на 10 км', value:'2'},
				{text:'Литров на 100 км', value:'3'},
				{text:'Километров на литр', value:'4'},
				{text:'US (США)', disabled: 'disabled'},
				{text:'Миль на галон', value:'6'},
				{text:'Галонов на 100 миль', value:'7'},
				{text:'UK (Англия)', disabled: 'disabled'},
				{text:'Миль на галон', value:'9'},
				{text:'Галонов на 100 миль', value:'10'}
			]
		},	
		methods: {
			recalculation: function(){
				var select = document.getElementById('selectKm').options.selectedIndex;
				var inputData = document.getElementById('inputData').value;

				//   из л на км
				if (select == 1){
					this.result1 = inputData; //л на км
					this.result2 = (inputData*10).toFixed(3); //л на 10 км
					this.result3 = (inputData*100).toFixed(3);//л на 100 км
					this.result4 = (1/inputData).toFixed(3); // км на л
					this.result6 = (mINkm/(inputData*gINl)).toFixed(3); // миль на галлон (сша)
					this.result7 = (100*(inputData*gINl)/mINkm).toFixed(3); //галлонов на 100 миль (сша)
					this.result9 = (mINkm/(inputData*agINl)).toFixed(3); // миль на галлон (англия)
					this.result10 = (100*(inputData*agINl)/mINkm).toFixed(3); //галлонов на 100 миль (англия)
				}

				//из литров на 10 км 
				if (select == 2){
					this.result1 = (inputData/10).toFixed(3); //л на км
					this.result2 = inputData; //л на 10 км
					this.result3 = (inputData*10).toFixed(3); //л на 100 км
					this.result4 = (10/inputData).toFixed(3); // км на л
					this.result6 = (mINkm*10/(inputData*gINl)).toFixed(3); // миль на галлон (сша)
					this.result7 = (10*(inputData*gINl)/mINkm).toFixed(3); //галлонов на 100 миль (сша)
					this.result9 = (mINkm*10/(inputData*agINl)).toFixed(3); // миль на галлон (англия)
					this.result10 = (10*(inputData*agINl)/mINkm).toFixed(3); //галлонов на 100 миль (англия)
				}

				if (select == 3){
					this.result1 = (inputData/100).toFixed(3);
					this.result2 = (inputData/10).toFixed(3);
					this.result3 = inputData;
					this.result4 = (100/inputData).toFixed(3);
					this.result6 = (mINkm*100/(inputData*gINl)).toFixed(3);
					this.result7 = ((inputData*gINl)/mINkm).toFixed(3);
					this.result9 = (mINkm*100/(inputData*agINl)).toFixed(3);
					this.result10 = ((inputData*agINl)/mINkm).toFixed(3);
				}

				if (select == 4){
					this.result1 = (1/inputData).toFixed(3);
					this.result2 = (10/inputData).toFixed(3);
					this.result3 = (100/inputData).toFixed(3);
					this.result4 = inputData;
					this.result6 = (inputData*lINg/kmINm).toFixed(3);
					this.result7 = (kmINm*100/(inputData*lINg)).toFixed(3);
					this.result9 = (inputData*lINag/kmINm).toFixed(3);
					this.result10 = (kmINm*100/(inputData*lINag)).toFixed(3);
				}

				if (select == 6){
					this.result1 = (lINg/(inputData*kmINm)).toFixed(3);
					this.result2 = (lINg*10/(inputData*kmINm)).toFixed(3);
					this.result3 = (lINg*100/(inputData*kmINm)).toFixed(3);
					this.result4 = (inputData*kmINm/lINg).toFixed(3);
					this.result6 = inputData;
					this.result7 = (100/inputData).toFixed(3);
					this.result9 = (inputData*gINag).toFixed(3);
					this.result10 = (100/(inputData*gINag)).toFixed(3);
				}

				if (select == 7){
					this.result1 = (inputData*lINg/kmINm/100).toFixed(3);
					this.result2 = (inputData*lINg/kmINm/10).toFixed(3);
					this.result3 = (inputData*lINg/kmINm).toFixed(3);
					this.result4 = (kmINm*100/inputData/lINg).toFixed(3);
					this.result6 = (100/(inputData)).toFixed(3);
					this.result7 = inputData;
					this.result9 = (100/(inputData*agINg)).toFixed(3);
					this.result10 = (inputData*agINg).toFixed(3);
				}

				if (select == 9){
					this.result1 = (lINag/inputData/kmINm).toFixed(3);
					this.result2 = (10*lINag/inputData/kmINm).toFixed(3);
					this.result3 = (100*lINag/inputData/kmINm).toFixed(3);
					this.result4 = (inputData*kmINm/lINag).toFixed(3);
					this.result6 = (inputData*agINg).toFixed(3);
					this.result7 = (100/inputData/agINg).toFixed(3);
					this.result9 = inputData;
					this.result10 = (100/inputData).toFixed(3);
				}

				if (select == 10){
					this.result1 = (inputData*lINag/kmINm/100).toFixed(3);
					this.result2 = (inputData*lINag/kmINm/10).toFixed(3);
					this.result3 = (inputData*lINag/kmINm).toFixed(3);
					this.result4 = (100*kmINm/inputData/lINag).toFixed(3);
					this.result6 = (100/inputData*agINg).toFixed(3);
					this.result7 = (inputData*gINag).toFixed(3);
					this.result9 = (100/inputData).toFixed(3);
					this.result10 = inputData;
				}

				if(!(inputData>0)){
					this.result1 ='0';
					this.result2 ='0';
					this.result3 ='0';
					this.result4 ='0';
					this.result6 ='0';
					this.result7 ='0';
					this.result9 ='0';
					this.result10 ='0';
				}
			},		
		}
	})