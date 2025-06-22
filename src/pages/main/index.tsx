import { Match, Suspense, Switch } from 'solid-js';
import Logo from '../../shared/ui/logo';
import Icon from '../../shared/ui/icon';

export default function MainPage() {
  return (
    <div class="w-full h-full bg-black">
      <header>
        <Logo />
        <Button size="sm">Создать мероприятие</Button>
      </header>
      <main>
        <Input
          icon={<Icon glyph="search" size="md" />}
          placeholder="поиск"
        />
        <div>
          <Title level="h1" color="primary-gradient">
            подобрали для вас
          </Title>
          <Suspense fallback={<EventCard.Skeleton />}>
            <Switch>
              <Match when={false}>
                <EventCard.NotFound />
              </Match>
              <Match when={true}>
                <EventCard />
              </Match>
            </Switch>
          </Suspense>
        </div>
        <div>
          <Title level="h1" color="primary-gradient">
            Смотрите также
          </Title>
          <div>
            <Suspense fallback={<EventCard.Skeleton />}>
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
            </Suspense>
            <Button variant="secondary">смотреть все</Button>
          </div>
        </div>
        <div>
          <Button>создать мероприятие</Button>
        </div>
      </main>
      <footer>
        <TabBar router={router}>
          <TabBar.Item icon={<Icon glyph="home" />}>
            Главная
          </TabBar.Item>
          <TabBar.Item icon={<Icon glyph="message" />}>
            Сообщения
          </TabBar.Item>
          <TabBar.Item icon={<Icon glyph="profile" />}>
            Профиль
          </TabBar.Item>
        </TabBar>
      </footer>
    </div>
  );
}
