import Logo from '../../shared/ui/logo';
import Button from '../../shared/ui/button';
import Text from '../../shared/ui/text';
import Icon from '../../shared/ui/icon';
import Input from '../../shared/ui/input';

export default function MainPage() {
  return (
    <div class="w-full h-full bg-black">
      <header class="flex justify-between items-center px-4 py-6">
        <Logo />
        <Button size="min">Создать мероприятие</Button>
      </header>
      <main class="bg-gray-0 rounded-t-4xl px-4 py-6">
        <Input
          iconBefore={<Icon glyph="search" stroke="gray" size="md" />}
          placeholder="поиск"
        />
        <div>
          <Text as="h1" color="primary" size="5xl">
            подобрали <br /> для вас
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
          <Text as="h1" size="5xl">
            смотрите также
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
