<script setup lang="ts">
import { defineProps } from 'vue'
import type { ActivityWithDetails } from '../../types'
import ActivityCard from '../ActivityCard/ActivityCard.vue'

const props = defineProps({
  activities: {
    type: Array as () => ActivityWithDetails[],
    required: true,
  },
})

const actividades = [
  {
    "proxylogicaldeletemodel_ptr_id": 28909,
    "title": "Jadesen – Centro de Estética y Podología",
    "id": 176012,
    "points": 5040,
    "bigbox_points": 5040,
    "activity": "{\"category\":\"Omm! Estar Bien\",\"rating\":5.0,\"subtitle\":null,\"description\":\"Una experiencia para regalar o regalarte. Disfruta de un circuito de spa y viv\\u00ed una experiencia \\u00fanica.\",\"title\":\"La experiencia incluye:\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/f2630a66-ace1-4f57-bda7-5ac91476fadd.png\"],\"know_what\":\"<p>Nuestro objetivo en Jadesen es lograr el equilibrio entre tu cuerpo y tu alma a trav&eacute;s de tratamientos m&eacute;dicos y est&eacute;ticos. Contamos con un espacio tranquilo y arm&oacute;nico en el que te vas a poder relajar. Sentirte natural y saludable es importante.</p>\",\"tip\":\"Ven\\u00eda a tu d\\u00eda de spa para despejar la mente y dejando afuera las corridas del d\\u00eda a d\\u00eda.  \\u00a1Preparate para vivir una experiencia \\u00fanica!\",\"locations\":[{\"province\":\"CABA\",\"phone\":\"\",\"delivery_in_all_country\":false,\"address\":\"Lavalle 1118\",\"lat\":\"-34.6026488000000000\",\"lng\":\"-58.3847817000000000\"},{\"province\":\"CABA\",\"phone\":\"1161867138\",\"delivery_in_all_country\":false,\"address\":\"Lavalle 1118 Piso 3 Dto F\",\"lat\":\"-34.6026488000000000\",\"lng\":\"-58.3847817000000000\"}],\"market_price\":5040,\"activity_hash\":\"ca7af9c077038ddd8b1e37f87a12ae1f\",\"partner\":\"Jadesen\",\"participants\":1,\"is_remote\":false,\"benefits\":\"<p>Podes elegir entre dos opciones de circuito con tres tratamientos diferentes</p>\\n\\n<p><strong>Opci&oacute;n 1:&nbsp;</strong>TERAPIA DRENATICA + HIDRATACI&Oacute;N</p>\\n\\n<ul>\\n    <li>Shock de hidrataci&oacute;n facial</li>\\n    <li>Drenaje linf&aacute;tico facial</li>\\n    <li>Drenaje linf&aacute;tico corporal</li>\\n</ul>\\n\\n<p>Duraci&oacute;n 1:00 hs&nbsp; &nbsp; &nbsp; Para 1 persona</p>\\n\\n<p><hr />\\n<p><strong>Opci&oacute;n 2:&nbsp;</strong>REFLEXOLOGIA HOL&Iacute;STICA</p></p>\\n<ul>\\n    <li>Reflexolog&iacute;a facial</li>\\n    <li>Reflexolog&iacute;a podal</li>\\n    <li>Terapias de respiraci&oacute;n anti Stress</li>\\n</ul>\\n\\n<p>Duraci&oacute;n 1:00 hs&nbsp; &nbsp;Para 1 persona</p>\\n\\n<p><em>Para que termines de relajarte como te mereces tenemos a un coffee break para que disfrutes de nuestra sala de estar con vistas a la ciudad.</em></p>\",\"activity_type\":\"on_site\",\"show_new\":false,\"id\":176012,\"small_print\":\"Podes realizar tu reserva a trav\\u00e9s del WhatsApp 116186 7138 y con gusto coordinaremos tu visita al spa. Las reservas deben realizarse con 48 hs de anticipaci\\u00f3n y las cancelaciones con 48 hs.\",\"name\":\"Jadesen \\u2013 Centro de Est\\u00e9tica y Podolog\\u00eda\"}",
    "visible": true,
    "participants": 1,
    "price": 5040,
    "order": 1606,
    "biglife_instance_id": 17,
    "activity_type": "on_site"
  },
  {
    "proxylogicaldeletemodel_ptr_id": 29035,
    "title": "La Fernetería",
    "id": 177932,
    "points": 3790,
    "bigbox_points": 3790,
    "activity": "{\"category\":\"\\u00d1am! Gastronom\\u00eda\",\"rating\":4.8,\"subtitle\":\"Para dos personas\",\"description\":\"Premiada por la academia italiana della cucina, presentamos La Ferneter\\u00eda, un viaje gastron\\u00f3mico por Italia de norte a sur.\",\"title\":\"La experiencia incluye\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/75d7cbde-e7e2-4e45-abfa-4737fcb1ebdb.jpg\",\"https://static.bigbox.com.ar/uploads/activity/5c6aef98-27e6-4f65-bab5-b4942345f99e.jpeg\",\"https://static.bigbox.com.ar/uploads/activity/44f0989d-0e48-4de1-9d62-d7508ae8fb5f.jpg\"],\"know_what\":\"<p>El chef ejecutivo es Ezequiel I&ntilde;iguez y la cocteleria de autor esta a cargo de Mart&iacute;n Suaya.</p>\",\"tip\":\"\",\"locations\":[{\"province\":\"CABA\",\"phone\":\"5656-5821\",\"delivery_in_all_country\":false,\"address\":\"SERRANO 1349\",\"lat\":\"-34.5904602000000000\",\"lng\":\"-58.4327288000000000\"}],\"market_price\":3790,\"activity_hash\":\"fe5989c59d55aafe7d3ae1164e222894\",\"partner\":\"La Ferneteria\",\"participants\":2,\"is_remote\":false,\"benefits\":\"<ul>\\n    <li>2 Tragos de autor / copas de vino / cerveza.</li>\\n    <li>2 Aguas.</li>\\n    <li>1 Entrada para compartir entre:</li>\\n</ul>\\n\\n<p>- Aranccinis de muzzarella, romesco y azafr&aacute;n.<br />\\n-&nbsp;Berenjenas parmesanas.<br />\\n-&nbsp;Sart&eacute;n de vegetales org&aacute;nicos.<br />\\n-&nbsp;Papas fritas.</p>\\n\\n<ul>\\n    <li>2 Pastas caseras a elecci&oacute;n entre:</li>\\n</ul>\\n\\n<p>- Fetuccinis con hongos y huevo poche.&nbsp;&nbsp;<br />\\n-&nbsp;Rigatonis con bolognesa braseada y ricotta cremosa.<br />\\n-&nbsp;Papardelles con pesto.</p>\\n\\n<ul>\\n    <li>1 Postre a elecci&oacute;n entre:</li>\\n</ul>\\n\\n<p>- Pannacota.<br />\\n- Helado.</p>\",\"activity_type\":\"on_site\",\"show_new\":false,\"id\":177932,\"small_print\":\"Reservas y cancelaciones con 24 h de anticipaci\\u00f3n. Tel\\u00e9fono 11 3257 1744\",\"name\":\"La Ferneter\\u00eda\"}",
    "visible": true,
    "participants": 1,
    "price": 3790,
    "order": 1605,
    "biglife_instance_id": 17,
    "activity_type": "on_site"
  },
  {
    "proxylogicaldeletemodel_ptr_id": 25963,
    "title": "Endulzarte Bakery",
    "id": 111001,
    "points": 2140,
    "bigbox_points": 2140,
    "activity": "{\"category\":\"Toc-Toc! En Casa\",\"rating\":4.7,\"subtitle\":\"Para una o m\\u00e1s personas\",\"description\":\"Endulzarte Bakery te acerca los m\\u00e1s ricos y completos desayunos, con variedad dulce y salado, para todos los gustos!\",\"title\":\"La experiencia incluye\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/48cbec63-6efe-48a1-9ac0-07908ae780ce.jpg\",\"https://static.bigbox.com.ar/uploads/activity/2f6a5d15-70cf-45fa-bcf7-7327df22e028.jpg\",\"https://static.bigbox.com.ar/uploads/activity/665088cd-e659-43a0-b621-589f53dbf37b.jpg\"],\"know_what\":\"<p>Todos nuestros productos son hechos en el d&iacute;a, sin conservantes.</p>\",\"tip\":\"Los alfacookies son una delicia!\",\"locations\":[{\"province\":\"CABA\",\"phone\":\"endulzarte.bakery@hotmail.com\",\"delivery_in_all_country\":false,\"address\":\"Julian Alvarez\",\"lat\":\"-34.5939314000000000\",\"lng\":\"-58.4277358000000000\"}],\"market_price\":2140,\"activity_hash\":\"db450baf4d39e34eea0b88cc1413475b\",\"partner\":\"Endulzarte Bakery\",\"participants\":1,\"is_remote\":false,\"benefits\":\"<p><strong>Box&nbsp; Desayuno / Merienda:</strong></p>\\n\\n<ul>\\n    <li>Jugo de naranja.</li>\\n    <li>Mini torta de la semana.</li>\\n    <li>Cuadradito de brownie.</li>\\n    <li>Muffin.</li>\\n    <li>Cookie.</li>\\n    <li>Mini bagel de salm&oacute;n.</li>\\n    <li>Pancitos saborizados.</li>\\n    <li>Dip de queso.</li>\\n</ul>\",\"activity_type\":\"delivery\",\"show_new\":false,\"id\":111001,\"small_print\":\"Para realizar la reserva comuincarse por mail a endulzarte.bakery@hotmail.com con al menos 72hs de anticipaci\\u00f3n (sujeto a disponibilidad). Si es para viernes o s\\u00e1bado deber\\u00e1 ser con mayor anticipaci\\u00f3n. Env\\u00edo incluido entre Av. Corrientes a Av. Sante Fe y de Av. Medrano a Av. Juan. B. Justo.\",\"name\":\"Endulzarte Bakery\"}",
    "visible": true,
    "participants": 1,
    "price": 2140,
    "order": 1887,
    "biglife_instance_id": 17,
    "activity_type": "delivery"
  },
  {
    "proxylogicaldeletemodel_ptr_id": 29155,
    "title": "Le Moulin de la Fleur",
    "id": 179222,
    "points": 3340,
    "bigbox_points": 3340,
    "activity": "{\"category\":\"\\u00d1am! Gastronom\\u00eda\",\"rating\":3.8,\"subtitle\":\"Para dos personas\",\"description\":\"Expertos en pasteler\\u00eda francesa, te esperan con los m\\u00e1s ricos platos para que pases un momento \\u00fanico con tu persona favorita.\",\"title\":\"La experiencia incluye\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/06135cb5-0086-46e3-b199-4acdca748d51.jpg\",\"https://static.bigbox.com.ar/uploads/activity/4976e21d-1ff7-42a9-8318-2ada39b2d337.jpg\",\"https://static.bigbox.com.ar/uploads/activity/e9d512bb-69c0-4cc4-847a-2898695b927a.jpg\"],\"know_what\":\"<p>Boulangerie &amp; Patisserie 100% artesanal. Usamos productos org&aacute;nicos de primera calidad. Nuestra caracteristica es no salir de las recetas originales y de esa forma brindar a nuestros clientes lo mejor de Francia.</p>\",\"tip\":\"La torta es imperdible!\",\"locations\":[{\"province\":\"CABA\",\"phone\":\"1126399877\",\"delivery_in_all_country\":false,\"address\":\"Vicente L\\u00f3pez 1699\",\"lat\":\"-34.5917186000000000\",\"lng\":\"-58.3920397000000000\"}],\"market_price\":3340,\"activity_hash\":\"b31eab140adfcf082944e2f4465d2aa6\",\"partner\":\"Le Moulin De La Fleur\",\"participants\":2,\"is_remote\":false,\"benefits\":\"<ul>\\n    <li>2 Bebidas sin alcohol&nbsp;</li>\\n    <li>2 Principales</li>\\n    <li>2 Cafes</li>\\n    <li>2 Porciones de torta.</li>\\n</ul>\",\"activity_type\":\"on_site\",\"show_new\":false,\"id\":179222,\"small_print\":\"Recomendamos realizar reserva previa por las restricciones sanitarias. Tel\\u00e9fono: 4811 3372\",\"name\":\"Le Moulin de la Fleur\"}",
    "visible": true,
    "participants": 1,
    "price": 3340,
    "order": 1610,
    "biglife_instance_id": 17,
    "activity_type": "on_site"
  },
  {
    "proxylogicaldeletemodel_ptr_id": 26776,
    "title": "Brunch Gourmet en Casa",
    "id": 135467,
    "points": 5500,
    "bigbox_points": 5500,
    "activity": "{\"category\":\"Toc-Toc! En Casa\",\"rating\":4.8,\"subtitle\":\"Para 2, 3 o m\\u00e1s personas\",\"description\":\"Gonzalo Lan\\u00fas Catering te acerca los productos y platos m\\u00e1s exclusivos!\",\"title\":\"Eleg\\u00ed la opci\\u00f3n que m\\u00e1s te guste\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/574dec62-8e71-493a-a421-4c9f523c55f7.jpg\",\"https://static.bigbox.com.ar/uploads/activity/c45687f6-7681-4704-91c0-84fd8ab2f772.jpeg\",\"https://static.bigbox.com.ar/uploads/activity/dc14cbba-416e-4571-bbf7-5349687fde6b.jpg\",\"https://static.bigbox.com.ar/uploads/activity/370a636f-dc5e-48ac-81b9-763f23ed4796.JPG\"],\"know_what\":\"<p>Todos los productos est&aacute;n cocidos, envasados al vac&iacute;o y congelados, y vienen con las instrucciones para regenerar. Con s&oacute;lo regenerar en minutos ya sea en horno, microondas o agua hirviendo quedan como reci&eacute;n hechos! Pod&eacute;s guardarlos en tu freezer hasta 6 meses.</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p>Chusme&aacute; m&aacute;s sobre esta empresa de Catering Gourmet con m&aacute;s de 25 a&ntilde;os brindando experiencias ac&aacute;: http://www.gonzalolanuscatering.com/.</p>\",\"tip\":\"Tener un brunch gourmet en tu casa nunca fue tan f\\u00e1cil y r\\u00e1pido.\",\"locations\":[{\"province\":\"CABA\",\"phone\":\"\",\"delivery_in_all_country\":false,\"address\":\"Av Santa Fe 5000\",\"lat\":\"-34.5768821000000000\",\"lng\":\"-58.4333884000000000\"},{\"province\":\"GBA Norte\",\"phone\":\"\",\"delivery_in_all_country\":false,\"address\":\"Juan B. Justo 1258\",\"lat\":\"-34.4659981000000000\",\"lng\":\"-58.5417663000000000\"},{\"province\":\"CABA\",\"phone\":\"\",\"delivery_in_all_country\":false,\"address\":\"Pilar\",\"lat\":\"-34.4570929000000000\",\"lng\":\"-58.8681663000000000\"}],\"market_price\":5500,\"activity_hash\":\"062b4a04d04049db1d5c9b45169aedc5\",\"partner\":\"Gonzalo Lan\\u00fas Catering\",\"participants\":4,\"is_remote\":false,\"benefits\":\"<p><strong>Opci&oacute;n 1:</strong></p>\\n\\n<p><strong>De nuestra pasteler&iacute;a casera</strong></p>\\n\\n<ul>\\n    <li>4 medialunas de manteca</li>\\n    <li>4 muffins</li>\\n    <li>Bud&iacute;n de vainilla</li>\\n    <li>2 brownies de chocolate</li>\\n</ul>\\n\\n<p><br />\\n<strong>Para picar</strong></p>\\n\\n<ul>\\n    <li>8 langostinos crujientes panados en panko con salsa de maracuy&aacute;</li>\\n    <li>8 bocaditos de masa philo relleno de champignon, queso parmesano y cebollitas caramelizadas</li>\\n    <li>8 chicken fingers con salsa de mostaza y miel</li>\\n</ul>\\n\\n<p><br />\\n<strong>Del campo</strong></p>\\n\\n<ul>\\n    <li>Provoleta estacionada a las finas hierbas</li>\\n    <li>4 empanadas bien jugosas de carne cortadas a cuchillo</li>\\n    <li>(blend de asado deshuesado, matambre y roast beef)</li>\\n    <li>4 empanadas de queso y cebollas caramelizadas</li>\\n</ul>\\n\\n<p><br />\\n<strong>Dips para acompa&ntilde;ar\\u200b</strong></p>\\n\\n<ul>\\n    <li>De remolacha</li>\\n    <li>De Arvejas</li>\\n    <li>De salm&oacute;n</li>\\n    <li>Humus<br />\\n    &nbsp;</li>\\n</ul>\\n\\n<p><strong>Crocantes</strong></p>\\n\\n<ul>\\n    <li>30 tostis de oliva y piment&oacute;n al or&eacute;gano</li>\\n</ul>\\n\\n<p><hr />\\n<p><strong>Opci&oacute;n 2: Picada GLC&nbsp;</strong>- Picada para 4 personas, pican 8.</p></p>\\n<p><strong>ENTRADA</strong>: CROQUETAS de carne (16 unidades)</p>\\n\\n<p><strong><em>2 Tablas de 3 exquisitos quesos y 3 fiambres premium: </em></strong></p>\\n\\n<ul>\\n    <li>Brie, Fontina estacionado y Roquefort</li>\\n    <li>Jam&oacute;n crudo, lomo curado y jam&oacute;n natural</li>\\n</ul>\\n\\n<p><strong><em>De nuestra Panaderia:</em></strong></p>\\n\\n<ul>\\n    <li>1 Pan de Campo,&nbsp; 7 tostadas con oliva y piment&oacute;n y 7 tostadas en domino de pan de nuez.</li>\\n</ul>\\n\\n<p><strong><em>Para acompa&ntilde;ar</em></strong></p>\\n\\n<ul>\\n    <li>Dip de queso crema y ciboullete</li>\\n    <li>Dip de remolacha</li>\\n    <li>Humus</li>\\n    <li>Muzzarella, tomate y albahaca</li>\\n</ul>\\n\\n<p><strong><em>Burbujas </em></strong></p>\\n\\n<ul>\\n    <li>4 porrones de cerveza Premium</li>\\n</ul>\",\"activity_type\":\"take_away\",\"show_new\":false,\"id\":135467,\"small_print\":\"Pod\\u00e9s realizar tu pedido escribiendo por whatsapp al +54 9 11 3590-9909. Por restricciones de circulaci\\u00f3n los pedidos se entregan y retiran de 10 a 17hs.\\r\\n\\r\\nSucursales disponibles:\\r\\n\\r\\nZona Norte: Delivery con cargo a Zona Norte y CABA de lunes a viernes de y take away en Beccar.\\r\\nPilar: Con modalidad de delivery con cargo (15km a la redonda del km 50 de Pilar) de lunes a viernes.\",\"name\":\"Brunch Gourmet en Casa\"}",
    "visible": true,
    "participants": 1,
    "price": 5500,
    "order": 2688,
    "biglife_instance_id": 17,
    "activity_type": "take_away"
  },
  {
    "proxylogicaldeletemodel_ptr_id": 29418,
    "title": "Restaurant Los Alisos",
    "id": 326,
    "points": 4990,
    "bigbox_points": 4990,
    "activity": "{\"category\":\"\\u00d1am! Gastronom\\u00eda\",\"rating\":null,\"subtitle\":\"Para 2 personas:\",\"description\":\"El Restaurant Los Alisos, propone una cocina regional de vanguardia. En el men\\u00fa se incorporan ingredientes regionales como ser la llama, la qu\\u00ednoa, y la papa entre otros, la mayor\\u00eda de los cuales se producen en la misma finca o en el valle, lo que otorga a los platos sabores sutiles y placenteros al paladar.\",\"title\":\"La experiencia incluye:\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/326/losalisos1.jpg\"],\"know_what\":\"\",\"tip\":\"\",\"locations\":[{\"province\":\"Tucum\\u00e1n\",\"phone\":\"(03867) 421 473 / 421 800\",\"delivery_in_all_country\":false,\"address\":\"Ruta provincial 325 Km. 13. Taf\\u00ed del Valle.\",\"lat\":\"-26.8458195000000000\",\"lng\":\"-65.7001190000000000\"}],\"market_price\":4990,\"activity_hash\":\"9b2cbae601129c3ebc66e08754d6a457\",\"partner\":\"Estancia Las Carreras\",\"participants\":2,\"is_remote\":false,\"benefits\":\"<ul>\\n    <li>Men&uacute; especial Estancia Las Carreras de tres pasos (entrada, plato principal y postre).</li>\\n    <li>1 copa de vino.</li>\\n    <li>Agua o gaseosa.</li>\\n    <li>Caf&eacute; o t&eacute;.</li>\\n</ul>\\n\\n<p>Para reservas comunicarse por tel&eacute;fono o mail a: info@estancialascarreras.com</p>\",\"activity_type\":\"on_site\",\"show_new\":true,\"id\":326,\"small_print\":\"\",\"name\":\"Restaurant Los Alisos\"}",
    "visible": true,
    "participants": 1,
    "price": 4990,
    "order": 1608,
    "biglife_instance_id": 17,
    "activity_type": "on_site"
  },
  {
    "proxylogicaldeletemodel_ptr_id": 29887,
    "title": "Eforea - Hilton Pilar",
    "id": 69326,
    "points": 5040,
    "bigbox_points": 5040,
    "activity": "{\"category\":\"Omm! Estar Bien\",\"rating\":4.7,\"subtitle\":\"Para dos personas:\",\"description\":\"An\\u00edmate a disfrutar en compa\\u00f1\\u00eda esta propuesta exclusiva para distensionar el cuerpo y relajar la mente.\",\"title\":\"La experiencia incluye\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/5cf6f2bd-de0d-4985-9047-3577cef19527.jpg\",\"https://static.bigbox.com.ar/uploads/activity/c00b556c-0476-43b8-9dd4-b640f5914cd2.jpg\",\"https://static.bigbox.com.ar/uploads/activity/86daf00f-88e6-4629-991a-6f3920f1d62d.jpg\"],\"know_what\":\"<p>Hilton Pilar te invita a&nbsp;disfrutar&nbsp;de una escapada relajante en el campo. Ubicado dentro del Pilar Golf Club, en las afueras de Buenos Aires, este hotel elegante y contempor&aacute;neo se encuentra en uno de los campos de golf m&aacute;s exclusivos de Argentina.&nbsp;</p>\",\"tip\":\"Un d\\u00eda de de spa con incre\\u00edbles vistas al campo de golf.\",\"locations\":[{\"province\":\"GBA Norte\",\"phone\":\"2304533800\",\"delivery_in_all_country\":false,\"address\":\"Ruta 8, Km 60.5\",\"lat\":\"-34.4384488000000000\",\"lng\":\"-58.9789236000000000\"}],\"market_price\":5040,\"activity_hash\":\"215fb45eafe94bdf62abaa0992ae9703\",\"partner\":\"Hilton Pilar\",\"participants\":2,\"is_remote\":false,\"benefits\":\"<ul>\\n    <li>Acceso a las instalaciones del spa: tumbonas t&eacute;rmicas, piscina l&uacute;dica in-out, jacuzzi interno y externo, sauna h&uacute;medo y sauna seco (no habilitados por situaci&oacute;n COVID por el momento), ducha escocesa, sala de relax.</li>\\n    <li>Acceso al Fitness center.</li>\\n    <li>Servicio de toallas.</li>\\n    <li>Estaci&oacute;n de hidrataci&oacute;n.</li>\\n    <li>Duraci&oacute;n 3 hs.</li>\\n</ul>\",\"activity_type\":\"closed\",\"show_new\":true,\"id\":69326,\"small_print\":\"Realiz\\u00e1 tu reserva escribiendo a eforea_spa@hilton.com. Sujeto a disponibilidad (mayor durante la semana).\",\"name\":\"Eforea - Hilton Pilar\"}",
    "visible": true,
    "participants": 1,
    "price": 5040,
    "order": 1610,
    "biglife_instance_id": 17,
    "activity_type": "closed"
  },
  {
    "proxylogicaldeletemodel_ptr_id": 33202,
    "title": "Clases de Arco y Flecha",
    "id": 86,
    "points": 4090,
    "bigbox_points": 4090,
    "activity": "{\"category\":\"Ahh! Aventura\",\"rating\":4.7,\"subtitle\":\"Para una persona\",\"description\":\"La arquer\\u00eda entrena tanto la postura como el balance espiritual. Tres clases integrales para entender esta actividad milenaria.\",\"title\":\"El regalo incluye\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/c9176670-5c4f-4cbb-a936-cf3e33c6ecea.jpg\",\"https://static.bigbox.com.ar/uploads/activity/17ee77ed-b450-4fb6-957b-d30965f08241.jpg\",\"https://static.bigbox.com.ar/uploads/activity/1103c9ba-c146-4026-87f1-9b85564bc71f.jpg\",\"https://static.bigbox.com.ar/uploads/activity/165ff278-eb73-4e62-8c46-3e3d31bdc2dc.jpg\"],\"know_what\":\"<p>El Tiro con Arco es una herramienta para facilitar el desarrollo del foco y la concentraci&oacute;n.</p>\",\"tip\":\"Control\\u00e1 el pulso. Es la clave!\",\"locations\":[{\"province\":\"CABA\",\"phone\":\"15 65395391\",\"delivery_in_all_country\":false,\"address\":\"Manuel Porcel de Peralta 1458\",\"lat\":\"-34.6198210000000000\",\"lng\":\"-58.5259990000000000\"}],\"market_price\":1300,\"activity_hash\":\"37b9d3c71887cb86441ea5182fbf362f\",\"partner\":\"Arco y Flecha\",\"participants\":1,\"is_remote\":false,\"benefits\":\"<ul>\\n    <li>(3) clases durante un mes.</li>\\n    <li>Diploma de Iniciaci&oacute;n.</li>\\n</ul>\\n\\n<p><em>Duraci&oacute;n aproximada por clase: 1 hora.</em></p>\",\"activity_type\":\"on_site\",\"show_new\":true,\"id\":86,\"small_print\":\"Para reservas puede escribir al WhatsApp 11 6539-5391. HORARIOS en Triglav (CAPITAL): Viernes a partir de las 18.15 hs - S\\u00e1bados 17.30 hs, y Domingos a partir de las 16 hs.\",\"name\":\"Clases de Arco y Flecha\"}",
    "visible": true,
    "participants": 1,
    "price": 4090,
    "order": 2960,
    "biglife_instance_id": 17,
    "activity_type": "on_site"
  },
  {
    "proxylogicaldeletemodel_ptr_id": 25714,
    "title": "Cavas Del Pozo",
    "id": 75605,
    "points": 1690,
    "bigbox_points": 1690,
    "activity": "{\"category\":\"\\u00d1am! Gastronom\\u00eda\",\"rating\":4.9,\"subtitle\":\"Para una persona:\",\"description\":\"Cavas Del Pozo te invita a conocer este nuevo mundo lleno de sensaciones en el cual, a trav\\u00e9s de tu vista, tu olfato, tu tacto y tu paladar, podr\\u00e1s experimentar nuevas propuestas de vinos.\",\"title\":\"El regalo incluye\",\"image\":[\"https://static.bigbox.com.ar/uploads/activity/e3895259-51fb-4741-bc78-4cd720f17f56.jpg\",\"https://static.bigbox.com.ar/uploads/activity/1c72d11f-14d8-44dc-a12a-be62e5b87f33.jpg\"],\"know_what\":\"<p>Podr&aacute;s experimentar nuevas propuestas de vinos j&oacute;venes o evolucionados, frutados o florales, astringentes o aterciopelados, estructurados o ligeros.</p>\",\"tip\":\"Dej\\u00e1 que un sommelier te guie en tu elecci\\u00f3n.\",\"locations\":[{\"province\":\"GBA Norte\",\"phone\":\"15-4498-4697\",\"delivery_in_all_country\":false,\"address\":\"Fray Luis Beltr\\u00e1n 1271\",\"lat\":\"-34.4915550000000000\",\"lng\":\"-58.5216327000000000\"}],\"market_price\":700,\"activity_hash\":\"529add4f21f1656e22a4580638fc4d5b\",\"partner\":\"Cavas Del Pozo\",\"participants\":1,\"is_remote\":false,\"benefits\":\"<p>A elecci&oacute;n entre:</p>\\n\\n<ul>\\n    <li><strong>Propuesta 1</strong>\\n\\n    <ul>\\n        <li>Una Botella de DV Catena Cabernet Malbec.</li>\\n    </ul>\\n    </li>\\n    <li><strong>Propuesta 2</strong>\\n    <ul>\\n        <li>Una Botella de Rutini Cabernet Malbec.</li>\\n    </ul>\\n    </li>\\n    <li><strong>Propuesta 3</strong>\\n    <ul>\\n        <li>Una botella de Salentein Reserva Malbec + 1 botella de Killka Cabernet Sauvignon.</li>\\n    </ul>\\n    </li>\\n</ul>\",\"activity_type\":\"take_away\",\"show_new\":true,\"id\":75605,\"small_print\":\"Reservas de Lunes a Viernes de 9.30 a 17.30 hs al 011-4793-2853 / 4793-2853.\",\"name\":\"Cavas Del Pozo\"}",
    "visible": true,
    "participants": 1,
    "price": 1690,
    "order": 1642,
    "biglife_instance_id": 17,
    "activity_type": "take_away"
  }
]
const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]
</script>
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        <ActivityCard v-for="activity in props.activities" :key="activity.id" :activity="activity" />
      </div>
    </div>
  </div>
</template>
