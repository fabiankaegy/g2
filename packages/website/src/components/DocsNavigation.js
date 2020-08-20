import {
  Menu,
  MenuItem,
  Scrollable,
  Subheading,
  Text,
  View,
  VStack,
} from "@wp-g2/components"
import { ui } from "@wp-g2/styles"
import { Link } from "gatsby"
import React from "react"

import data from "../data/docs.json"

function Links({ links }) {
  if (!links) return null
  return (
    <Menu>
      {links.map(link => (
        <MenuItem as={Link} key={link.title} to={link.link}>
          {link.title}
        </MenuItem>
      ))}
    </Menu>
  )
}

function SubSection({ sections }) {
  if (!sections) return null

  return (
    <VStack spacing={4}>
      {sections.map(section => (
        <View key={section.title}>
          <Section isSubSection {...section} />
        </View>
      ))}
    </VStack>
  )
}

function Section({ isSubSection, links, sections, title }) {
  const TitleComponent = isSubSection ? Subheading : Text
  return (
    <VStack css={[ui.margin.bottom(isSubSection ? 0 : 4)]} spacing={2}>
      <TitleComponent size={!isSubSection ? 14 : 10} weight="bold">
        {title}
      </TitleComponent>
      <Links links={links} />
      <SubSection sections={sections} />
    </VStack>
  )
}

export function DocsNavigation() {
  const sections = data.sections

  return (
    <VStack alignment="topLeft" css={[ui.position.sticky, { top: 100 }]}>
      <Scrollable css={[ui.frame.height("80vh")]}>
        <View css={[ui.padding.right(3)]}>
          {sections.map(section => (
            <View key={section.title}>
              <Section {...section} />
            </View>
          ))}
        </View>
      </Scrollable>
    </VStack>
  )
}
