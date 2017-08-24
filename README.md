## FlexGrid

Bu grid varsayılan olarak 12 sütun üzerine flexbox tekniği ile inşa edilmiştir. Css üreticisi olarak Sass, görev yöneticisi olarak Gulp tercih edilmiştir. 	

Grid’in sütün sayısı (column), sütün aralıkları (gutter), ekran aralıkları (media), media  kural yönü tercihi (min / max) , özellik opsiyonları ve seçici kurallar _set.scss üzeriden özelleştirilebilmektedir.

### Row
Satırın refrans aldığı etiketler aşağıda gibidir. Canlı örneklerini görmek için etiket linklerine tıklayın.

* [center](https://thealico.github.io/flexboxgrid/example/#07)     - Sütunları yatayada ortalar 
* [start](https://thealico.github.io/flexboxgrid/example/#07)      - Sütünları sola yaslı sıralar
* [between](https://thealico.github.io/flexboxgrid/example/#11)    - Sütünları sol ve sağa doğru sonlandırarak sıralar
* [around](https://thealico.github.io/flexboxgrid/example/#12)     - Sütunları merkeden ortalayarak sağa ve sola doğru sıralar
* [end](https://thealico.github.io/flexboxgrid/example/#07)        - Sütunları sağa doğru yaslıyarak sıralar
* [middle](https://thealico.github.io/flexboxgrid/example/#08)     - Sütünları dikeyde ortalar
* [bottom](https://thealico.github.io/flexboxgrid/example/#08)     - Sütunları alta yaslar
* top                
* stretch            
* baseline           
* [direct-x](https://thealico.github.io/flexboxgrid/example/#09)    -  Sütunları yatay sıralar 
* [direct-xr](https://thealico.github.io/flexboxgrid/example/#09)   -  Yatay sırayı ters çevirir
* [direct-y](https://thealico.github.io/flexboxgrid/example/#09.1)  -  Sütunları dikey sıralar
v[direct-yr](https://thealico.github.io/flexboxgrid/example/#09.2)  -  Dikey sırayı ters çevirir
* [ns](https://thealico.github.io/flexboxgrid/example/#05)          -  Gutter boşluklar kaldırır
* [c-nb](https://thealico.github.io/flexboxgrid/example/#15)			  -  ( Col No Bottom ) Alt guuter boşluğu eder
* [c-ob](https://thealico.github.io/flexboxgrid/example/#15.1)		  -  ( Col On Bottom ) Alt gutter boşluğu aktif yapar
* c-nf - Child No Flex - Row özelliği verilmiş sütunun flex özelliğini kaldrır
* [c-eh](https://thealico.github.io/flexboxgrid/example/#16)   - ( Col Equal Height ) Sütunları yüksekliği eşler
* [c-eh-1](https://thealico.github.io/flexboxgrid/example/#16) - ( Col Equal Height ) Sütunları flex methodu ile eşler 


