'use client'
import {
  HiVideoCamera,
  HiHome,
  HiSearch,
  HiPlay,
  HiFolder,
  HiShoppingCart,
  HiCog,
  HiMail,
  HiUser
} from 'react-icons/hi'
import * as S from './styles'
import { useState } from 'react'
import { BiLogOut } from 'react-icons/bi'
import ButtonMenu from '../ButtonMenu'
import { useRouter } from 'next/navigation'
import { LuGoal } from 'react-icons/lu'

export const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const navigate = useRouter()

  // Definindo os itens das seções
  const menuSections = [
    {
      title: 'Main',
      items: [
        { icon: <HiHome size={24} />, label: 'Home', link: '/' },
        { icon: <LuGoal size={24} />, label: 'Goals', link: '/goals' },
        { icon: <HiPlay size={24} />, label: 'Insights', link: '#' },
        { icon: <HiFolder size={24} />, label: 'Docs', link: '#' }
      ]
    },
    {
      title: 'Settings',
      items: [
        { icon: <HiShoppingCart size={24} />, label: 'Products', link: '#' },
        { icon: <HiCog size={24} />, label: 'Settings', link: '#' },
        {
          icon: <HiMail size={24} />,
          label: 'Messages',
          link: '#',
          notification: true
        },
        {
          icon: <HiUser size={24} />,
          label: 'Account',
          link: '#'
        }
      ]
    }
  ]

  return (
    <S.SidebarWrapper open={open}>
      <ButtonMenu onToggle={(isOpen) => setOpen(isOpen)} open={open} />

      <S.IconWrapper onClick={() => navigate.push('#')} open={open}>
        <HiVideoCamera size={32} />
        <span>Dashboard</span>
      </S.IconWrapper>

      {menuSections.map((section, index) => (
        <S.Section key={index}>
          {section.items.map((item, itemIndex) => (
            <S.IconWrapper
              key={itemIndex}
              onClick={() => navigate.push(item.link)}
              open={open}
              className={item.notification ? 'withMessage' : ''}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.notification && <S.NotificationDot />}
            </S.IconWrapper>
          ))}
        </S.Section>
      ))}

      <S.IconWrapper
        onClick={() => navigate.push('#')}
        open={open}
        className="mt-auto"
      >
        <BiLogOut size={24} />
        <span>Logout</span>
      </S.IconWrapper>
    </S.SidebarWrapper>
  )
}
