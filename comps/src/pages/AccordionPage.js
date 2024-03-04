import Accordion from '../components/Accordion';

function AccordionPage() {
  const items=[
    {
      id: '1213ew',
      label: 'Can i use React on a project?',
      content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
    },
    {
      id: '34ddf',
      label: 'Can i use Javascript on a project?',
      content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
    },
    {
      id: '134cc',
      label: 'Can i use CSS on a project?',
      content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
    }
  ]

  return (
  <Accordion items={items}/>
  );
}

export default AccordionPage;
