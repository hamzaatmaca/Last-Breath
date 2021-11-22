/****** BTN MODAL ******/
let modal = document.getElementById('modal');
let nav = document.getElementById('nav');
let nefes = document.getElementById('kbreath');
let kalp = document.getElementById('khearth');
let yas = document.getElementById('totalYear')
let yass = yas.value
let yasss = yass.split(' ');
let customerAge = Number(yasss[0])
let division = customerAge / 72;
let resultMeasure = Number(division.toFixed(2))

modal.addEventListener('click',()=>{
	let info = document.createElement('div');
	info.classList.add('modalInfo');
	info.innerHTML = `
	<h1 style="color:aqua;letter-spacing:4px;text-shadow:0 0 4px aqua"></h1>
	<p id="itext" class="information">
	Şimdi Konuşalım Biraz. Konuşmak için vaktin var mı?
	</p>
	<div class="buttons">
	<button id="positive" class=" btn btn-primary">Evet konuşalım</button>
	<button id="getTheHell" class="btn btn-success">X</button>
	<button id="negative" class="btn btn-danger">İlgilenmiyorum</button>

	</div>`

	nav.appendChild(info);
	let getTheHell = document.getElementById('getTheHell');
	let positive = document.getElementById('positive')
	let negative = document.getElementById('negative')
	let itext = document.getElementById('itext')
	let close = document.getElementById('getTheHell');
	let name = modal.value
	
	
	modal.style.display="none";
	

	positive.addEventListener('click',()=>{

		if(positive.innerHTML == 'Evet konuşalım'){
			
			itext.innerHTML=  `Hoşgeldin ${name}. Ömrünün ${resultMeasure} kadarı geçmiş. Ne kadar kısa bir hayatın var. Hiç düşündün mü? `;		
			positive.innerHTML = 'Evet düşündüm'
			negative.innerHTML = 'İlgilenmiyorum'
		}
		else if(positive.innerHTML == 'Evet düşündüm'){
			
			itext.innerHTML = `Kainata göre senin yaşadığın şu hayat yok gibi. Ama sana sonsuz gibi geliyor değil mi?`;		
			positive.innerHTML = 'Evet sonsuz gibi geliyor';
			negative.innerHTML = 'Yoo.. Hiç öyle gelmiyor.'
			

		}
		else if(positive.innerHTML == 'Evet sonsuz gibi geliyor'){
			
			itext.innerHTML = `Neden böyle gaflet içinde ölüm yokmuş gibi yaşama düşüncesine tutulduğunu öğremek istermisin ?`;		
			positive.innerHTML = 'Evet tabiki de isterim';
			negative.innerHTML = 'Yaa boşver keyfimi bozma'

		}
		else if(positive.innerHTML == 'Evet tabiki de isterim'){
			
			itext.innerHTML = ` Bu kadar kısa ve her an bitebilecek bir hayatın amaca sence ne olabilir?`;		
			positive.innerHTML = 'Cevabı merakla bekliyorum';
			negative.innerHTML = 'Yapacak çok işim var ben kaçtım'
			

		}
		else if(positive.innerHTML == 'Evet böyle bir ihtimal var'){
			
			itext.innerHTML = ` İhtimal değil bu bir gerçek. Hemde gaflet içindekilere, acilen cevap verilmesi gereken sorular sorduracak bir hakikat. Ama ben sana bu konu ile alakalı bazı cevaplar verecek birilerini tanıyorum`;		
			positive.innerHTML = 'Cevabı merakla bekliyorum';
			negative.innerHTML = 'Yapacak çok işim var ben kaçtım'
			

		}
		else if(positive.innerHTML == 'Aslında pek te mutlu değilim'){
			
			itext.innerHTML = ` Her saniye ölüme doğru hazırlıksız giderken mutsuz olman çok normal. Sana hazırlanman için yardımcı olabilirim?`;		
			positive.innerHTML = 'Evet bana yardım et';
			negative.innerHTML = 'Boşver!! Uğraşma'
			

		}
		else if(positive.innerHTML = 'Evet bana yardım et' || positive.innerHTML == 'Cevabı merakla bekliyorum' || positive.innerHTML == 'Peki çözüm ne?' || positive.innerHTML == 'Sence ne yapmalıyım?'){
			
			itext.innerHTML = `
			<a style="color:white;text-decoration:none" target="_blank" href="http://www.buyuvecinmusallatinasifa.com"><span style="color:aqua">Buraya</span> tıklarsan hayattaki en büyük düşmanınla tanışmış olacaksın </a>
			</br><a style="color:white;text-decoration:none" target="_blank" href="http://www.hayalhanem.com"><span style="color:aqua">Buraya</span> tıklarsan yaşama amacını öğrenmiş olacaksın</a>`;		
			positive.style.display='none';
			negative.style.display='none';
			

		}
	})

	negative.addEventListener('click',()=>{
		if(negative.innerHTML == 'Karışma bana' || negative.innerHTML == 'İlgilenmiyorum' || negative.innerHTML == 'Boşver!! Uğraşma'){
			itext.innerHTML=  `Konuşacak bişey yok o zaman ${name}. Ömrünün ${resultMeasure} kadarı geçmiş ve sen her geçen gün ölüme yaklaşırken umursamaz bir şekilde yaşamaya devam ediyorsan sana güle güle. `;
			negative.style.display = "none"
			positive.style.display = "none"
			getTheHell.innerHTML = "Sanada Güle Güle"

		}
		else if(negative.innerHTML == 'Yoo.. Hiç öyle gelmiyor.'){
			itext.innerHTML=  `Şuna bak! Alacak ${nefes.value} nefesin kalmış. Kalbin ${kalp.value} kez daha atacak ve öleceksin. Böyle ciddi bir problemin varken nasıl mutlu yaşayabiliyorsun ? `;
			positive.innerHTML="Aslında pek te mutlu değilim";
			negative.innerHTML="Gayet Mutluyum. Bundan Sanane";

		}
		else if(negative.innerHTML == 'Gayet Mutluyum. Bundan Sanane'){
			itext.innerHTML=  `Öleceğini bile bile mutluymuş gibi yaşamaya çalışan insanlara şaşırıyorum. Aslında sana bir çözüm sunmak istiyorum. `;
			positive.innerHTML="Peki çözüm ne?"
			negative.innerHTML="Karışma bana?"

		}
		else if(negative.innerHTML == 'Yaa boşver keyfimi bozma'){
			itext.innerHTML=  `${nefes.value} adet nefes sonra hayatın sona erecek. Ne keyfinden bahsediyorsun ? `;
			positive.innerHTML="Sence ne yapmalıyım?"
			negative.innerHTML="Karışma bana"
		}
		else if(negative.innerHTML == 'Yapacak çok işim var ben kaçtım'){
			itext.innerHTML=  `Peki ya bugün yapacak işlerin son işlerin ise ?`;
			positive.innerHTML="Evet böyle bir ihtimal var"
			negative.innerHTML="İlgilenmiyorum"
		}
		else if(negative.innerHTML == 'Karışma bana?'){
			itext.innerHTML=  `Bak hala hakikati öğrenme ve yaşama fırsatın var. Belki sorularına cevap bulmana yardımcı olabilirim`;
			positive.innerHTML="Cevabı merakla bekliyorum"
			negative.innerHTML="İlgilenmiyorum"
		}
	})

	close.addEventListener('click',()=>{
		modal.style.display="block";
		nav.removeChild(info)
	})





})
/****** BTN MODAL ******/

