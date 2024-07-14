import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ActivityCard from './ActivityCard.vue'

const activityMock = {
  proxylogicaldeletemodel_ptr_id: 32585,
  title: 'SĀNTAL - Belgrano',
  id: 201870,
  points: 1890,
  bigbox_points: 1890,
  activity: {
    category: 'Ñam! Gastronomía',
    rating: null,
    subtitle: 'Para dos personas',
    description:
      'Una taza de café entre tus manos, hecho por expertos baristas y acompañado de una exquisita pastelería. ¡Un viaje de ida!',
    title: 'La experiencia incluye',
    image: [
      'https://static.bigbox.com.ar/uploads/activity/4f093d81-1bbe-4661-b3dd-cc1e9fce7ee3.jpeg',
      'https://static.bigbox.com.ar/uploads/activity/b84376e1-7284-4f67-b8bb-cbbd1b17b200.jpeg',
      'https://static.bigbox.com.ar/uploads/activity/ee7b5a28-11fb-446f-89c5-3f2f121de84f.jpeg'
    ],
    know_what:
      '<p>Ofrece una experiencia &uacute;nica con caf&eacute; hecho por nuestros expertos baristas, variedad de t&eacute; en hebras, pasteler&iacute;a de primer nivel en manos de la Chef Beatriz Chomnale, deliciosos s&aacute;ndwiches y ensaladas, jugos Detox, tienda de productos org&aacute;nicos y saludables.</p>',
    tip: 'Vení con tu mascota, disfruta del hermoso patio al aire libre junto a una comida orgánica que dará que hablar.',
    locations: [
      {
        province: 'CABA',
        phone: '4783.2856',
        delivery_in_all_country: false,
        address: 'Virrey del Pino 2235',
        lat: '-34.5652639000000000',
        lng: '-58.4527318000000000'
      }
    ],
    market_price: 1890,
    activity_hash: '2673b16bb6d510a814a70ba01e7134e4',
    partner: 'SĀNTAL',
    participants: 2,
    is_remote: false,
    benefits:
      '<ul>\n    <li>Una infusi&oacute;n por persona de Caf&eacute; de Especialidad o T&eacute; en Hebras.</li>\n    <li>Un jugo de naranja natural</li>\n    <li>Dos medialunas de manteca calentitas</li>\n    <li>Tostado de jam&oacute;n y queso en pan de campo de masa madre</li>\n    <li>Dos panes de queso calentitos</li>\n    <li>Budin de banana split</li>\n</ul>',
    activity_type: 'on_site',
    show_new: false,
    id: 201870,
    small_print:
      'Lunes a viernes se puede consumir en el local. Fines de semana y Feriados solo Take Away',
    name: 'SĀNTAL - Belgrano'
  },
  visible: true,
  participants: 1,
  price: 1890,
  order: 2909,
  biglife_instance_id: 17,
  activity_type: 'on_site'
}

describe('ActivityCard', () => {
  it('renders properly', () => {
    const wrapper = mount(ActivityCard, { props: { activity: activityMock } })
    expect(wrapper.text()).toContain(activityMock.title)
    expect(wrapper.text()).toContain(activityMock.activity.description)
    expect(wrapper.text()).toContain(activityMock.points)
  })

  it('renders an image', () => {
    const wrapper = mount(ActivityCard, { props: { activity: activityMock } })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(activityMock.activity.image[0])
  })

  it('on click, emits an event', async () => {
    const wrapper = mount(ActivityCard, { props: { activity: activityMock } })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toEqual([[activityMock]])
  })
})
