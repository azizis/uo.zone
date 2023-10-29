import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { Box, Button, Divider, Text, VStack, HStack } from '@chakra-ui/react';
import { trackEvent } from '~/lib/helpers';
import ExternalLink from '~/components/ExternalLink';

export default function Footer() {
  const tFooter = useTranslations('Footer');
  const tGeneral = useTranslations('General');

  const router = useRouter();
  const { pathname, asPath, query } = router;

  const switchLanguages = (locale: string) => () => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <Box pb={10}>
      <Divider borderColor={'rgba(91,0,19,0.42)'} mb={4} />
      <VStack spacing={4}>
        <HStack h={6}>
          <Button variant={'ghost'} size={'xs'} onClick={switchLanguages('en')}>
            English
          </Button>
          <Divider
            orientation={'vertical'}
            borderColor={'rgba(91,0,19,0.42)'}
          />
          <Button variant={'ghost'} size={'xs'} onClick={switchLanguages('fr')}>
            Français
          </Button>
        </HStack>
        <Text
          textAlign={'center'}
          fontSize={'sm'}
          fontWeight={300}
          color={'gray.600'}
        >
          {tFooter('dataSource.text')}{' '}
          <ExternalLink href={tFooter('dataSource.office.link')}>
            {tFooter('dataSource.office.text')}
          </ExternalLink>{' '}
          {tGeneral('and')}{' '}
          <ExternalLink href={tFooter('dataSource.uozone.link')}>
            {tFooter('dataSource.uozone.text')}
          </ExternalLink>
        </Text>
        <Text
          textAlign={'center'}
          fontSize={'sm'}
          fontWeight={300}
          color={'gray.600'}
        >
          <ExternalLink
            href={'https://github.com/alexander-azizi-martin/uo.zone'}
            onClick={() => {
              trackEvent('button.github.email.click');
            }}
          >
            Github
          </ExternalLink>{' '}
          {tFooter('maintainer')}{' '}
          <ExternalLink
            href={'mailto:alexander.azizi-martin@uo.zone'}
            onClick={() => {
              trackEvent('button.alexander_azizi-martin.email.click');
            }}
          >
            Alexander Azizi-Martin
          </ExternalLink>
        </Text>
      </VStack>
    </Box>
  );
}
