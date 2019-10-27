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
			changeParam: function(){
				var select = document.getElementById('selectKm').options.selectedIndex;
				var inputeData = document.getElementById('inputeData').value;

				//   из л на км
				if (select == 1){
					this.result1 = inputeData; //л на км
					this.result2 = (inputeData*10).toFixed(3); //галлонов на 100 миль (сша)
					this.result3 = (inputeData*100).toFixed(3);//л на 100 км
					this.result4 = (1/inputeData).toFixed(3); // км на л
					this.result6 = (mINkm/(inputeData*gINl)).toFixed(3); // миль на галлон (сша)
					this.result7 = (100*(inputeData*gINl)/mINkm).toFixed(3); //галлонов на 100 миль (сша)
					this.result9 = (mINkm/(inputeData*agINl)).toFixed(3); // миль на галлон (англия)
					this.result10 = (100*(inputeData*agINl)/mINkm).toFixed(3); //галлонов на 100 миль (англия)
				}

				//из литров на 10 км 
				if (select == 2){
					this.result1 = (inputeData/10).toFixed(3); //л на км
					this.result2 = inputeData; //галлонов на 100 миль (сша)
					this.result3 = (inputeData*10).toFixed(3); //л на 100 км
					this.result4 = (10/inputeData).toFixed(3); // км на л
					this.result6 = (mINkm*10/(inputeData*gINl)).toFixed(3); // миль на галлон (сша)
					this.result7 = (10*(inputeData*gINl)/mINkm).toFixed(3); //галлонов на 100 миль (сша)
					this.result9 = (mINkm*10/(inputeData*agINl)).toFixed(3); // миль на галлон (англия)
					this.result10 = (10*(inputeData*agINl)/mINkm).toFixed(3); //галлонов на 100 миль (англия)
				}

				if (select == 3){
					this.result1 = (inputeData/100).toFixed(3);
					this.result2 = (inputeData/10).toFixed(3);
					this.result3 = inputeData;
					this.result4 = (100/inputeData).toFixed(3);
					this.result6 = (mINkm*100/(inputeData*gINl)).toFixed(3);
					this.result7 = ((inputeData*gINl)/mINkm).toFixed(3);
					this.result9 = (mINkm*100/(inputeData*agINl)).toFixed(3);
					this.result10 = ((inputeData*agINl)/mINkm).toFixed(3);
				}

				if (select == 4){
					this.result1 = (1/inputeData).toFixed(3);
					this.result2 = (10/inputeData).toFixed(3);
					this.result3 = (100/inputeData).toFixed(3);
					this.result4 = inputeData;
					this.result6 = (inputeData*lINg/kmINm).toFixed(3);
					this.result7 = (kmINm*100/(inputeData*lINg)).toFixed(3);
					this.result9 = (inputeData*lINag/kmINm).toFixed(3);
					this.result10 = (kmINm*100/(inputeData*lINag)).toFixed(3);
				}

				if (select == 6){
					this.result1 = (lINg/(inputeData*kmINm)).toFixed(3);
					this.result2 = (lINg*10/(inputeData*kmINm)).toFixed(3);
					this.result3 = (lINg*100/(inputeData*kmINm)).toFixed(3);
					this.result4 = (inputeData*kmINm/lINg).toFixed(3);
					this.result6 = inputeData;
					this.result7 = (100/inputeData).toFixed(3);
					this.result9 = (inputeData*gINag).toFixed(3);
					this.result10 = (100/(inputeData*gINag)).toFixed(3);
				}

				if (select == 7){
					this.result1 = (inputeData*lINg/kmINm/100).toFixed(3);
					this.result2 = (inputeData*lINg/kmINm/10).toFixed(3);
					this.result3 = (inputeData*lINg/kmINm).toFixed(3);
					this.result4 = (kmINm*100/inputeData/lINg).toFixed(3);
					this.result6 = (100/(inputeData)).toFixed(3);
					this.result7 = inputeData;
					this.result9 = (100/(inputeData*agINg)).toFixed(3);
					this.result10 = (inputeData*agINg).toFixed(3);
				}

				if (select == 9){
					this.result1 = (lINag/inputeData/kmINm).toFixed(3);
					this.result2 = (10*lINag/inputeData/kmINm).toFixed(3);
					this.result3 = (100*lINag/inputeData/kmINm).toFixed(3);
					this.result4 = (inputeData*kmINm/lINag).toFixed(3);
					this.result6 = (inputeData*agINg).toFixed(3);
					this.result7 = (100/inputeData/agINg).toFixed(3);
					this.result9 = inputeData;
					this.result10 = (100/inputeData).toFixed(3);
				}

				if (select == 10){
					this.result1 = (inputeData*lINag/kmINm/100).toFixed(3);
					this.result2 = (inputeData*lINag/kmINm/10).toFixed(3);
					this.result3 = (inputeData*lINag/kmINm).toFixed(3);
					this.result4 = (100*kmINm/inputeData/lINag).toFixed(3);
					this.result6 = (100/inputeData*agINg).toFixed(3);
					this.result7 = (inputeData*gINag).toFixed(3);
					this.result9 = (100/inputeData).toFixed(3);
					this.result10 = inputeData;
				}

				if(inputeData=='' || !(inputeData*1>=0) || inputeData =='0'){
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