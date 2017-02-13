# Flexbox Grid
Bu grid modeli 12 sütun üzerine [flexbox](http://www.w3schools.com/css/css3_flexbox.asp) tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarakta Gulp tercih edilmiştir. Media değer aralığı seçenekleri aşağıda görülen tablodaki gibidir.

Bu listede genel kullanıma göre **ms** adlı beşinci bir ufak aralık görmektesiniz. Bu aralık mobilin yatay ve dikey kullanımına göre farklı özelleştirebilme ihtiyacından doğmuştur. Bunu tercih etmeseniz [grid.scss](https://github.com/thealico/flexboxgrid/blob/master/src/style/grid.scss) dosyasından ms etiketiyle dönen değerleri disable etmeniz yeterli olacaktır.


| Media Değerleri  | MS <br> ( 376 > )  | XS <br> ( 568 > ) | SM <br> ( 768 > )  |   MD <br> ( 1024 > )  |  LG <br> ( 1280 > )  |
| --- | --- | --- | --- | --- | --- | --- |
| Class Prefix         |   -ms   | -xs   |  -sm  |  -md  |  -lg  |
| Sass Media Değişken  |   $gl-ms  |  $gl-xs  |  $gl-sm  |  $gl-md  | $gl-lg  |


Grid sistemindeki  satırlar ve sütunların class etiketleri aşina olduğumuz şekide  **row** ve **col** olarak atandı. Sırasıyal gidelim şimdi. 

##Row

Flexbox gridlerin önceki nesil sistemlere göre ayrışan en belirgin özelliği col sütun değerini belirtmeye gereken kalmadan otomatik yada belirli bir değerde olması gerektiği bilgilerinin row üzerinden atanabilmesidir. Bu çok daha esnek yapıları hızlıca çıkarmımıza olanak tanır. 

Basitçe örneklerler isek  aşağıdaki row içinde dört col otomatik olarak 100% üzerinden 4'e bölünerek yerleşim gösterecektir.

```
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

Şimdi bu örneği şu şekilde yapalım. Sondaki sütun'a col-6 verdik geriye kalan 3 sütun ise  6 sütunluk genişlik payı için 3'e otomatik olarak bölünecetir.

```
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col-6"></div>
</div>
```

Devam edelim satıra bu sefer row-2 diyelim bu seferde içindeki sütunlar col-2 değerinde dizileceklerdir

```
<div class="row-2">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

Şimdi aşağıdaki tablodan row'un aldığı referansları ve açıklamlarını bakabilirsiniz. Örnekleri görmek içinde değerlere verdiğim **linke ** tıklamanız yeterli olacaktır.


| Değer               | Media Destek | Açıklama |
| ------------------- | ----- | ------------------------ |
| center              | Var   | Sütunları yatayada ortalar|
| start               | Var   | Sütünları sola yaslı sıralar |
| between             | Var   | Sütünları sol ve sağa doğru sonlandırarak sıralar |
| around              | Var   | Sütunları merkeden ortalayarak sağa ve sola doğru sıralar |
| end                 | Var   | Sütunları sağa doğru yaslıyarak sıralar|
| top                 | Var   | Sütunları üste yaslar |
| middle              | Var   | Sütünları dikeyde rtalar|
| bottom              | Var   | Sütunları alta yaslar|
| stretch             | Var   ||
| baseline            | Var   ||
| direct-x            | Var   | Sütünları yatay sıralar |
| direct-xr           | Var   | Sütünları yatayda ters sıralanır  |
| direct-y            | Var   | Sütünları dikey sıralar|
| direct-yr           | Var   | Sütunları dikey ter sıralanır |


##Col


| Değer               | Media | Açıklama |
| ------------------- | ----- | ------------------------ |
| col-top             | Var   | Sütunu üste konumlar |
| col-middle          | Var   | Sütunu dikeyde ortaya konumlar |
| col-bottom          | Var   | Sütunu alta konumlanır |
| col-first           | Var   | Sütunu sol başa konumlar |
| col-last            | Var   | Sütunu sağ sona konumlar |
| col-ns              | Yok   | Sütunun padding boşluklarını sıfırlar |











