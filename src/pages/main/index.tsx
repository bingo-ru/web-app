import Logo from '../../shared/ui/logo';
import Button from '../../shared/ui/button';
import Text from '../../shared/ui/text';

export default function MainPage() {
  return (
    <div class="w-full h-full">
      <header>
        <Logo />
        <Button size="min">Создать мероприятие</Button>
      </header>
      <main>
        {/*<Input
          icon={<Icon glyph="search" size="md" />}
          placeholder="поиск"
        />*/}
        <div>
          <Text as="h1" color="primary" size="5xl">
            подобрали для вас
          </Text>
          {/*<Suspense fallback={<EventCard.Skeleton />}>
            <Switch>
              <Match when={false}>
                <EventCard.NotFound />
              </Match>
              <Match when={true}>
                <EventCard />
              </Match>
            </Switch>
          </Suspense>*/}
        </div>
        <div>
          <Text as="h1" color="primary">
            Смотрите также
          </Text>
          <div>
            {/*<Suspense fallback={<EventCard.Skeleton />}>
              <Switch>
                <Match when={false}>
                  <EventCard.NotFound />
                </Match>
                <Match when={true}>
                  <EventCard />
                </Match>
              </Switch>
            </Suspense>
            <Suspense fallback={<EventCard.Skeleton />}>
              <Switch>
                <Match when={false}>
                  <EventCard.NotFound />
                </Match>
                <Match when={true}>
                  <EventCard />
                </Match>
              </Switch>
            </Suspense>*/}
            <Button variant="secondary">смотреть все</Button>
          </div>
        </div>
        <div>
          <Button>создать мероприятие</Button>
        </div>
      </main>
      <footer>
        {/*<TabBar router={router}>
          <TabBar.Item icon={<Icon glyph="home" />}>
            Главная
          </TabBar.Item>
          <TabBar.Item icon={<Icon glyph="message" />}>
            Сообщения
          </TabBar.Item>
          <TabBar.Item icon={<Icon glyph="profile" />}>
            Профиль
          </TabBar.Item>
        </TabBar>*/}
      </footer>
    </div>
  );
}
