import React from 'react';;
import { View, Text } from 'react-native';
import { List } from '@divriots/starter-origami/list';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const AccordionShowcase = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};
export const accordion = () => <AccordionShowcase />;

export const accordion_group = () => (
  <List.AccordionGroup>
    <List.Accordion title="Accordion 1" id="1">
      <List.Item title="Item 1" />
    </List.Accordion>
    <List.Accordion title="Accordion 2" id="2">
      <List.Item title="Item 2" />
    </List.Accordion>
    <View>
      <Text>
        List.Accordion can be wrapped because implementation uses React.Context.
      </Text>
      <List.Accordion title="Accordion 3" id="3">
        <List.Item title="Item 3" />
      </List.Accordion>
    </View>
  </List.AccordionGroup>
);

export const list_icon = () => (
  <>
    <List.Icon icon="folder" />
    <List.Icon icon="equal" />
    <List.Icon icon="calendar" />
  </>
);


export const list_items = () => (
  <>
    <List.Item
      title="First Item"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
    />
    <List.Item
      title="Second Item"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
    />
  </>
);

export const list_section = () => (
  <List.Section>
    <List.Subheader>Some title</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
    <List.Item
      title="Second Item"
      left={() => <List.Icon color="#000" icon="folder" />}
    />
  </List.Section>
);