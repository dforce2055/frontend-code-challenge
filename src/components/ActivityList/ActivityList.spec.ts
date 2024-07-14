import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import type { ActivityWithDetails } from '../../types'

import ActivityList from './ActivityList.vue'

const activitiesMock: ActivityWithDetails[] = [
  {
    proxylogicaldeletemodel_ptr_id: 26789,
    title: 'La Estaca',
    id: 116598,
    points: 5500,
    bigbox_points: 5500,
    activity: {
      category: 'Toc-Toc! En Casa',
      rating: 4.7,
      subtitle: 'Para cuatro personas',
      description:
        'Si hablamos de momentos ricos, La Estaca sabe muy bien como lograrlos, para ellos cada uno de esos momentos son únicos y ahora  te invitan a disfrutarlos en tu casa, ellos te lo llevan.',
      title: 'La experiencia incluye',
      image: [
        'https://static.bigbox.com.ar/uploads/activity/cb4e3bab-fb99-4b22-9e19-188bd8b46dc7.jpg',
        'https://static.bigbox.com.ar/uploads/activity/d3e6d6d6-b4e8-4390-96a6-ab7a4f64222a.jpg',
        'https://static.bigbox.com.ar/uploads/activity/b6984629-50ed-4177-a0a2-adf686c47714.jpg',
        'https://static.bigbox.com.ar/uploads/activity/db75022e-bc13-48e9-acff-c76643c2b400.JPG'
      ],
      know_what:
        '<p>Su concepto de catering a las brasas une lo mejor de la cocina con lo riqu&iacute;simo y original del asado.</p>',
      tip: 'Disfrutá la experiencia y sentite en el restaurante.',
      locations: [
        {
          province: 'GBA Norte',
          phone: '1159672246',
          delivery_in_all_country: false,
          address: 'Av. Juan Segundo Fernández 386',
          lat: '-34.4892423000000000',
          lng: '-58.5515241000000000'
        },
        {
          province: 'Buenos Aires Provincia',
          phone: 'General Rodriguez',
          delivery_in_all_country: false,
          address: 'Delivery',
          lat: '-34.5456524000000000',
          lng: '-59.3502164000000000'
        },
        {
          province: 'GBA Norte',
          phone: '1159672246',
          delivery_in_all_country: false,
          address: 'Delivery',
          lat: '-34.4523040000000000',
          lng: '-58.6930945000000000'
        },
        {
          province: 'GBA Norte',
          phone: '1159672246',
          delivery_in_all_country: false,
          address: 'Delivery',
          lat: '-34.5669372000000000',
          lng: '-59.1865815000000000'
        },
        {
          province: 'GBA Norte',
          phone: '',
          delivery_in_all_country: false,
          address: 'Martinez',
          lat: '-34.4941520000000000',
          lng: '-58.5098397000000000'
        },
        {
          province: 'GBA Norte',
          phone: '',
          delivery_in_all_country: false,
          address: 'Zona Norte',
          lat: '-34.5198766000000000',
          lng: '-58.4860760000000000'
        }
      ],
      market_price: 5500,
      activity_hash: '3aa30b26a33bd89cc4904f3520b7d287',
      partner: 'La Estaca',
      participants: 4,
      is_remote: false,
      benefits:
        '<p><strong>BOX&nbsp;PICOTEO</strong></p>\n\n<ul>\n    <li>500gr Quiche.</li>\n    <li>600gr Aros de cebolla.</li>\n    <li>500gr Bondiola braseada.</li>\n    <li>8 Empanadas de lomo.</li>\n    <li>6 Croquetas de cordero.</li>\n    <li>8 Bu&ntilde;uelos de espinaca.</li>\n    <li>8 Canastitas de gruyere y champignon.</li>\n    <li>700gr Papas fritas con cheddar y cebolla de verdeo.</li>\n    <li>Alioli-Barbacoa-Honey Mustard.</li>\n    <li>4 Postre Oreo.</li>\n</ul>\n\n<p><em>Recibir&aacute;n&nbsp;una box con los platos envasados al vacio. Estar&aacute;n&nbsp;listos para regenerar y terminarlos con las instrucciones correspondientes.</em></p>',
      activity_type: 'delivery',
      show_new: true,
      id: 116598,
      small_print:
        'Envío incluído de lunes a sábados en las siguientes zonas: Beccar, San Isidro, Martínez, Acassuso, La Lucila, Olivos, Vicente López. Para reservar comunicarse con 48hs de anticipación por mail a info@cateringlaestaca.com o los siguientes números: 11 3908 0802 o 4766 6625 interno 133.',
      name: 'La Estaca'
    },
    visible: true,
    participants: 1,
    price: 5500,
    order: 2701,
    biglife_instance_id: 17,
    activity_type: 'delivery'
  },
  {
    proxylogicaldeletemodel_ptr_id: 25228,
    title: 'Baum Palermo',
    id: 136611,
    points: 2740,
    bigbox_points: 2740,
    activity: {
      category: 'Ñam! Gastronomía',
      rating: 4.8,
      subtitle: 'Para dos o cuatro personas',
      description:
        'Apasionados por el arte y la cerveza, siendo fieles a sus valores y a su espíritu inquieto e innovador!',
      title: 'La experiencia incluye',
      image: [
        'https://static.bigbox.com.ar/uploads/activity/9766066c-4ad7-490a-b43d-b3c73a66f504.jpg',
        'https://static.bigbox.com.ar/uploads/activity/1cdb6aaf-5a78-4538-82d0-c41135a86f6c.jpg',
        'https://static.bigbox.com.ar/uploads/activity/2187af2c-89e4-40bd-ac15-4d7ad5c8a580.jpg'
      ],
      know_what:
        '<p>Sentir y pensar, somos una cervecer&iacute;a que respira arte y naturaleza, que crece confiando en los procesos y reinvent&aacute;ndose d&iacute;a a d&iacute;a.</p>',
      tip: 'Disfrutalo en la  vereda!',
      locations: [
        {
          province: 'CABA',
          phone: '1124523221',
          delivery_in_all_country: false,
          address: 'Cabrera 4427',
          lat: '-34.5939698000000000',
          lng: '-58.4286628000000000'
        }
      ],
      market_price: 2740,
      activity_hash: '7ffdc40bb0ae1ed904628cbab2ae8967',
      partner: 'Baum Palermo',
      participants: 2,
      is_remote: false,
      benefits:
        '<p><strong>OPCI&Oacute;N 1</strong></p>\n\n<p>Paquete Mexicano I - Orale Burrito, Perr&oacute;n Caliente, Guarnici&oacute;n Papas + Envase 2 lt Cerveza.</p>\n\n<ul>\n    <li>Burrito de braseado de bondiola salteada, frijoles, guacamole y queso mozzarella. Con dip de cilantro y cebolla, crema acida y salsa picante.</li>\n    <li>Hot Dog con Salchicha alemana con panceta crocante, cebollas caramelizadas, guacamole, queso tybo fundido y parmesano + Guarnici&ograve;n de Papas.</li>\n    <li>4 pintas de Cervezas Cl&aacute;sicas + Happy Hour en Cervezas Cl&aacute;sicas toda la noche: Blonde, Scottish y Porter.</li>\n</ul>\n\n<p><strong>OPCI&Oacute;N 2:</strong></p>\n\n<p>Paquete Mexicano II - Tacos de Pollo/Cerdo, Malditas Alitas de Pollo + 2lts Cerveza.</p>\n\n<ul>\n    <li>Bondiola de cerdo adobada en jugo de naranja y especias o&nbsp;pollo salteado en morr&oacute;n y cebolla, queso fundido y dips de salsa picantes, guacamole y pico de gallo.</li>\n    <li>Alitas de pollo marinadas en cerveza honey, con dip de barbacoa picante y crema acida.&nbsp;</li>\n    <li>4 pintas de Cervezas Cl&aacute;sicas + Happy Hour en Cervezas Cl&aacute;sicas toda la noche: Blonde, Scottish y Porter.</li>\n</ul>\n\n<p><strong>OPCI&Oacute;N 3:</strong></p>\n\n<p>Tabla Cl&aacute;sica 2&nbsp;personas + 4&nbsp;pintas.</p>\n\n<ul>\n    <li>Jam&oacute;n&nbsp;cocido, jam&oacute;n crudo, lomo a las finas hierbas, longaniza espa&ntilde;ola, mortadela, queso pategras, tybo, azul, pat&eacute; BAUM, morrones asados, berenjenas en escabeche, aceitunas, alioli de r&uacute;cula y pan de campo.</li>\n    <li>4 pintas de Cervezas Cl&aacute;sicas + Happy Hour en Cervezas Cl&aacute;sicas toda la noche: Blonde, Scottish y Porter.</li>\n</ul>\n\n<p><strong>OPCI&Oacute;N 4:</strong></p>\n\n<p>Tabla Mosaic 2&nbsp;Personas + 4&nbsp;pintas.</p>\n\n<ul>\n    <li>Crispy chicken, salchichas, teque&ntilde;os, milanesitas, rabas, croquetas de mc&amp;cheese o&nbsp;papas fritas, salsa barbacoa, aderezo Baum, alioli de r&ugrave;cula, cheddar y salsa picante.</li>\n    <li>4 pintas de Cervezas Cl&aacute;sicas + Happy Hour en Cervezas Cl&aacute;sicas toda la noche: Blonde, Scottish y Porter.</li>\n</ul>',
      activity_type: 'on_site',
      show_new: false,
      id: 136611,
      small_print:
        'Realizá la reserva con 24hs de anticipación por whatsapp al 11 2452 3221 indicando tu código. Días viernes y sábados sin reserva, sujeto a disponibilidad.',
      name: 'Baum Palermo'
    },
    visible: true,
    participants: 1,
    price: 2740,
    order: 1704,
    biglife_instance_id: 17,
    activity_type: 'on_site'
  },
  {
    proxylogicaldeletemodel_ptr_id: 25381,
    title: 'Cena en lo de Rabi',
    id: 30167,
    points: 2790,
    bigbox_points: 2790,
    activity: {
      category: 'Ñam! Gastronomía',
      rating: 4.7,
      subtitle: 'Para 2 personas',
      description:
        'Desde su tierra natal, Calcutta en la India, comparte recetas deliciosas y saludables. Especiadas pero no picantes, la explosión de exquisitos sabores de este menú te seducirán.',
      title: 'La experiencia incluye',
      image: [
        'https://static.bigbox.com.ar/uploads/activity/c2e334bd-f89e-4ea9-b1bb-54124687446f.jpg',
        'https://static.bigbox.com.ar/uploads/activity/1e0d9445-0dcb-45a3-bf2f-d3fbd2f0edc4.jpg',
        'https://static.bigbox.com.ar/uploads/activity/f6f02ff7-237c-4d1c-880f-d9adcf2d878d.jpg',
        'https://static.bigbox.com.ar/uploads/activity/7d782e9a-0059-4f72-9f07-24c2a4833691.jpg'
      ],
      know_what:
        '<p>Nac&iacute; en Calcutta, India. Desde joven descubr&iacute; mi vocaci&oacute;n por la cocina. Me form&eacute; como Chef en prestigiosas Instituciones de la India y trabaj&eacute; en Hoteles y Restaurantes del Norte y Sur de mi tierra natal. En el a&ntilde;o 2007 llegu&eacute; a Buenos Aires y desde entonces comparto la cocina de la India con los porte&ntilde;os. Te invito a descubrir los sabores de mi pa&iacute;s, preparaciones deliciosas y saludables.</p>',
      tip: 'Un viaje a la india en Buenos Aires: especias, condimentos, atención y muchos (muchos!) sabores nuevos asegurados. Consultá por menú para vegetarianos, veganos y celíacos.',
      locations: [
        {
          province: 'CABA',
          phone: '54 9 11 6738-4528',
          delivery_in_all_country: false,
          address: 'José A. Cabrera 4175',
          lat: '-34.5870185000000000',
          lng: '-58.4257803000000000'
        }
      ],
      market_price: 900,
      activity_hash: 'c9cbbb67876155ed14207f3394f5da46',
      partner: 'Cookapp en lo de Rabi',
      participants: 2,
      is_remote: false,
      benefits:
        '<p><strong>Primer paso:</strong></p>\n\n<ul>\n    <li>Samosa de cordero\n    <ul>\n        <li>Empanadita triangular al horno rellena con lomo de cordero cortado a cuchillo, cebolla morada, cilantro y especias</li>\n    </ul>\n    </li>\n</ul>\n\n<p>&nbsp;</p>\n\n<p><strong>Segundo paso:</strong></p>\n\n<ul>\n    <li>Pakora de Espinaca\n    <ul>\n        <li>Bu&ntilde;uelo de espinaca, harina de garbanzo, jengibre y especias.</li>\n        <li>Acompa&ntilde;ado con ensaladita de poroto mug.</li>\n    </ul>\n    </li>\n</ul>\n\n<p><strong>Tercer paso:</strong></p>\n\n<ul>\n    <li>Gobi Manchuri\n    <ul>\n        <li>Tempura de coliflor ba&ntilde;ada con una salsa de tomate, ajo, jengibre, cilantro y especias.</li>\n    </ul>\n    </li>\n</ul>\n\n<p><strong>Cuarto paso:</strong></p>\n\n<ul>\n    <li>Pollo Masala\n    <ul>\n        <li>El plato m&aacute;s popular de la India a base de pollo marinado con&nbsp;pasta&nbsp;de ajo, jengibre y especias. Cocinado al horno y luego a la olla en deliciosa salsa cremosa de casta&ntilde;as de caju, cebolla caramelizada, tomate y masala.</li>\n        <li>Acompa&ntilde;ado con pan t&iacute;pico de la india.&nbsp;</li>\n    </ul>\n    </li>\n</ul>\n\n<p><strong>Quinto paso:</strong></p>\n\n<ul>\n    <li>Burfi de pistacho\n    <ul>\n        <li>Triangulitos cremosos preparados con cardamomo, pistacho, leche en polvo y crema. Acompa&ntilde;ados con delicioso topping de frutas de estaci&oacute;n.&nbsp;</li>\n    </ul>\n    </li>\n</ul>',
      activity_type: 'on_site',
      show_new: false,
      id: 30167,
      small_print:
        'Reservar vía mail a janarabi@live.com o al 1153166361. Consultar por  el precio del descorche. Por cancelaciones, deberán avisar con 12 h de anticipación.',
      name: 'Cena en lo de Rabi'
    },
    visible: true,
    participants: 1,
    price: 2790,
    order: 1857,
    biglife_instance_id: 17,
    activity_type: 'on_site'
  }
]

describe('ActivityList', () => {
  it('renders properly', () => {
    const wrapper = mount(ActivityList, { props: { activities: activitiesMock } })
    expect(wrapper.text()).toContain(activitiesMock[0].title)
    expect(wrapper.text()).toContain(activitiesMock[0].activity.description)
    expect(wrapper.text()).toContain(activitiesMock[0].points)
  })

  it('renders a list of activities', () => {
    const wrapper = mount(ActivityList, { props: { activities: activitiesMock } })
    const activities = wrapper.findAll('[data-test="activity-card"]')
    expect(activities.length).toBe(activitiesMock.length)
  })

  it('renders a list of activities images', () => {
    const wrapper = mount(ActivityList, { props: { activities: activitiesMock } })
    const activities = wrapper.findAll('[data-test="activity-card"]')

    const img = activities[0].find('img')
    expect(img.exists()).toBe(true)

    const images = activities.map((activity) => activity.find('img'))
    expect(images.length).toBe(activitiesMock.length)
    expect(activities.length).toBe(activitiesMock.length)
  })

  it('on click, emits an event', async () => {
    const wrapper = mount(ActivityList, { props: { activities: activitiesMock } })
    const activities = wrapper.findAll('[data-test="activity-card"]')
    await activities[0].trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toEqual([[activitiesMock[0]]])
  })
})
