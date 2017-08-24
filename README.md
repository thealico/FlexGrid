# Flexbox Grid
Bu grid modeli 12 sütun üzerine [flexbox](http://www.w3schools.com/css/css3_flexbox.asp) tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarakta Gulp tercih edilmiştir. Media değer aralıkları aşağıdaki tabloda görüldüğü gibidir.

[Demo Sayfası](https://thealico.github.io/flexboxgrid/example/)

| Media Değerleri      | MS <br> ( 376 > )  | XS <br> ( 568 > ) | SM <br> ( 768 > )  |   MD <br> ( 1024 > )  |  LG <br> ( 1280 > )  |
| ---                  | ---                | ---               | ---                |  ---                  | ---                  |
| Class Prefix         | -ms                | -xs               |  -sm               |  -md                  | -lg                 |
| Sass Media Değişken  |  $fg-ms            |  $fg-xs           |  $fg-sm            |  $fg-md               | $fg-lg               |

----------

Satırlar ve sütunların class etiketleri  Bootstrap aşina olduğumuz şekide  **row** ve **col** olarak atandı. Col (col-1 > col 12) ve row (row-1 > row-12) kullanılıyor. Media aralığına göre formatlamak içinde yine media prefix (col-xs- ) ekleriyle birlikte yazıyoruz.


| Etiket    | Açıklama                                                       |
| ---       | ---                                                            |
| row       | Satır etiket ismi                                              |
| row-      | 1 den 12 ye kadar sütunlarının kaçarlı olacağı değeri alır     | 
| row-      | -ms -xs -sm -md -lg media eklerini alır  (row-xs-3)            |
| col       | Sütun etiketi ismi (tek başına kullanılır)                     |
| col-      | 1 den 12 ye kadar kaçarlı sütun değeri alır                    |
| col-      | -ms -xs -sm -md -lg media eklerini alır (col-xs-6)             |

Flexbox Grid lerde  önceki nesil metodlara göre ayrışan en belirgin özellik col sütun sayısı değerini belirtmeye gereken kalmadan otomatik verebiliriz. Yada satırın (row) kendisine içinde sütünların (col) kaçarlı sütun olacağını söylebiliriz. Mesala aşağıdaki örnekte üç sütun var bu otomatik olarak üçe bölüneceği anlamına gelir. Eğer dört tane koyar isek dörde bölünecektir.

```
<div class="row">
  <div class="col">%33.33</div>
  <div class="col">%33.33</div>
  <div class="col">%33.33</div>
</div>
```

Buraya bakalım şimdi **row-2** verilmiş buna göre aşağıdaki kutular iki sütun genişliğinde dizilecektir. 

```
<div class="row-2">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```
Olayı biraz daha detay katalım. Sütuna (row) bir şart atamayalım, ancak içerdeki sütunlardan sadece birine sütun sayısı verelim. Buna göre aşağıdaki örneğin çıktısında son sütun 6 genişliğinde olacaktır. Diğer sütunlar ise kalan alanı eşit şekilde paylaşacaktır.

```
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col-6"></div>
</div>
```

----------

### Satır (Row) Referansları
Satırın (row) aldığı referansları aşağıdaki tabloda görüldüğü gibidir. Media (-ms,-xs,-sm,-md,-lg) desteği kapsayanlar var olarak işaretlenmiştir. Referans linklerine tıklayarak çalışan örnekleri bakabilirsiniz.

| Değer               | Media Destek | Açıklama |
| ------------------- | ----- | ------------------------ |
| [center](https://thealico.github.io/flexboxgrid/example/#07)              | Var   | Sütunları yatayada ortalar|
| [start](https://thealico.github.io/flexboxgrid/example/#07)               | Var   | Sütünları sola yaslı sıralar |
| [between](https://thealico.github.io/flexboxgrid/example/#11)              | Var   | Sütünları sol ve sağa doğru sonlandırarak sıralar |
| [around](https://thealico.github.io/flexboxgrid/example/#12)              | Var   | Sütunları merkeden ortalayarak sağa ve sola doğru sıralar |
| [end](https://thealico.github.io/flexboxgrid/example/#07)                 | Var   | Sütunları sağa doğru yaslıyarak sıralar|
| top                 | Var   | Sütunları üste yaslar |
| [middle](https://thealico.github.io/flexboxgrid/example/#08)              | Var   | Sütünları dikeyde rtalar|
| [bottom](https://thealico.github.io/flexboxgrid/example/#08)              | Var   | Sütunları alta yaslar|
| stretch             | Var   ||
| baseline            | Var   ||
| [direct-x](https://thealico.github.io/flexboxgrid/example/#09)             | Var   | Varsayılan sıralama düzeni yatay sıralama |
| [direct-xr](https://thealico.github.io/flexboxgrid/example/#09)            | Var   | Yatayda sırayı ters çevirir |
| [direct-y](https://thealico.github.io/flexboxgrid/example/#09.1)           | Var   | Sütünları dikey sıralar|
| [direct-yr](https://thealico.github.io/flexboxgrid/example/#09.2)          | Var   | Dikeydeki sıralamayı ters çevirir |
| [ns](https://thealico.github.io/flexboxgrid/example/#05)                   | -     | Gutter boşlukları sıfırlar |
| [c-nb](https://thealico.github.io/flexboxgrid/example/#15)| Var     | Child No Bottom - Sütun alt bottom boşluğu pasifleştirir |
| [c-ob](https://thealico.github.io/flexboxgrid/example/#15.1)| Var     | Child On Bottom - Sütun alt bottom boşluğu etkinleştir |
| c-nf| Yok     | Child No Flex - Row özelliği verilmiş sütunun flex özelliğini kaldrır |
| [c-eh](https://thealico.github.io/flexboxgrid/example/#16)| Yok     | Child Equal Height - Sütunlara yükseklik eşleme desteği atar |
| [c-eh-1](https://thealico.github.io/flexboxgrid/example/#16)| Yok     | Child Equal Height - Sütunlara yükseklik eşleme desteği flex methodu ile atar |


## Sütun (Col) Referansları

Sütunun (col) aldığı referanslar aşağıdaki tabloda görüldüğü gibidir. Media (-ms,-xs,-sm,-md,-lg) desteği kapsayanlar var olarak işaretlenmiştir. Referans linklerine tıklayarak çalışan örnekleri bakabilirsiniz.

| Değer               | Media | Açıklama |
| ------------------- | ----- | ------------------------ |
| [tc-top](https://thealico.github.io/flexboxgrid/example/#08.4)          | Var   | Sütunu üste yaslar |
| [tc-middle](https://thealico.github.io/flexboxgrid/example/#08.3)          | Var   | Sütunu dikeyde ortaya yaslar |
| [tc-bottom ](https://thealico.github.io/flexboxgrid/example/#08.1)         | Var   | Sütunu alta yaslar |
| [tc-ns]()             | Yok   | Sütunun padding (gutter) sıfırlar |
| [tc-nb]()             | Yok   | Sütunun alt padding (gutter) sıfırlar |
| [tc-first](https://thealico.github.io/flexboxgrid/example/#10)           | Var   | Sütunu ilk sıraya alır |
| [tc-last](https://thealico.github.io/flexboxgrid/example/#10)            | Var   | Sütunu son sıraya alır |
| [order-](https://thealico.github.io/flexboxgrid/example/#10.1)        | Var   | Sütunu istedğimiz sıraya almayı sağlar 1 den 10 kadar desteği vardır |
| [order-xs-](https://thealico.github.io/flexboxgrid/example/#10.2)        | Var   | Sütunu istedğimiz sıraya almayı sağlar 1 den 10 kadar desteği vardır |
| [left-](https://thealico.github.io/flexboxgrid/example/#14)        | Var   | BootStrap dan bildiğiniz Offset ile öteleme desteği vardır left- 1 den 12 ye kadar destekler yine media (left-xs-) desteğide yer alır|
| [right-](https://thealico.github.io/flexboxgrid/example/#14)        | Var   | Aynı şekilde offset right da yer alıyor |











