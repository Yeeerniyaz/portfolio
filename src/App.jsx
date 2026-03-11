import React from "react";
import {
  AppShell,
  Container,
  Group,
  Title,
  Text,
  Button,
  SimpleGrid,
  Card,
  Badge,
  ThemeIcon,
  Stack,
  rem,
  ActionIcon,
  Timeline,
  Paper,
  Box,
  Grid,
  Blockquote,
} from "@mantine/core";
import {
  IconBrandReact,
  IconBrandPython,
  IconCpu,
  IconBrandTelegram,
  IconBrandGithub,
  IconDeviceMobile,
  IconGitBranch,
  IconBolt,
  IconQuote,
  IconMapPin,
  IconUserCheck,
  IconBriefcase,
  IconWorld,
  IconCloud,
  IconDeviceDesktop,
  IconHome,
} from "@tabler/icons-react";

const projectsData = [
  {
    id: 1,
    title: "Justice Company",
    description:
      "Минималистичный лендинг для юристов с интегрированной CMS. Управление контентом и ценами через Telegram-бота.",
    tags: ["Node.js", "Express", "Docker", "Telegram API"],
    color: "yellow",
    link: "https://justicecompany.yeee.kz/",
    isNew: true,
    inDevelopment: false,
    icon: IconBriefcase,
  },
  {
    id: 2,
    title: "Royal Banners",
    description:
      "Корпоративный портал с эталонным UI/UX. Строгий дизайн, эффект матового стекла и плавная адаптивность.",
    tags: ["React", "Mantine UI", "Vite"],
    color: "violet",
    link: "https://ukb.yeee.kz/",
    inDevelopment: false,
    icon: IconWorld,
  },
  {
    id: 3,
    title: "ProElectro KZ",
    description:
      "CRM-система для электромонтажного бизнеса. Telegram-бот принимает заявки и автоматизирует работу бригад.",
    tags: ["Node.js", "React Native", "PostgreSQL"],
    color: "blue",
    link: "https://t.me/proelectric3_bot",
    inDevelopment: false,
    icon: IconBolt,
  },
  {
    id: 4,
    title: "DropIt Cloud",
    description:
      "Аналог Google Drive. Безопасная авторизация, загрузка файлов и возможность делиться ими по ссылке.",
    tags: ["MongoDB", "Express", "React", "Redux"],
    color: "cyan",
    link: "https://github.com/Yeeerniyaz/dropit",
    inDevelopment: false,
    icon: IconCloud,
  },
  {
    id: 5,
    title: "Smart Mirror VECTOR",
    description:
      "Умное зеркало. Кастомный интерфейс на React, глубоко настроенный Linux и обновления системы по воздуху.",
    tags: ["React", "Electron", "Linux", "Bash"],
    color: "teal",
    link: "#",
    inDevelopment: true,
    icon: IconDeviceDesktop,
  },
  {
    id: 6,
    title: "Smart Home (Wiren Board)",
    description:
      "Локальное управление умным домом на базе промышленного ПЛК без зависимости от сторонних серверов.",
    tags: ["Wiren Board", "Linux", "MQTT", "Modbus"],
    color: "orange",
    link: "#",
    inDevelopment: true,
    icon: IconHome,
  },
];

const skills = [
  {
    icon: IconBrandReact,
    label: "Frontend",
    desc: "React.js, Redux, Mantine UI",
    color: "blue",
  },
  {
    icon: IconDeviceMobile,
    label: "Mobile",
    desc: "React Native, Expo (iOS & Android)",
    color: "teal",
  },
  {
    icon: IconBrandPython,
    label: "Backend",
    desc: "Node.js, Express, PostgreSQL, MongoDB",
    color: "yellow",
  },
  {
    icon: IconCpu,
    label: "IoT & DevOps",
    desc: "Linux, Docker, Wiren Board, ESP32",
    color: "orange",
  },
];

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppShell header={{ height: 70 }} padding="md">
      <AppShell.Header>
        <Container size="lg" h="100%">
          <Group h="100%" justify="space-between">
            <Title order={3} fw={900} style={{ letterSpacing: 1 }}>
              <Text span c="#d9480f" inherit>
                YERNIYAZ
              </Text>
              .DEV
            </Title>

            <Group gap="sm" visibleFrom="xs">
              <Button
                variant="subtle"
                color="gray"
                onClick={() => scrollToSection("about")}
              >
                Обо мне
              </Button>
              <Button
                variant="subtle"
                color="gray"
                onClick={() => scrollToSection("projects")}
              >
                Проекты
              </Button>
              <ActionIcon
                component="a"
                href="https://github.com/Yeeerniyaz"
                target="_blank"
                size="lg"
                variant="default"
                radius="xl"
              >
                <IconBrandGithub size={20} />
              </ActionIcon>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="lg" py="xl">
          <Stack align="flex-start" gap="lg" py={80} pos="relative">
            <Box
              style={{
                position: "absolute",
                top: -50,
                right: 0,
                width: 300,
                height: 300,
                background:
                  "radial-gradient(circle, rgba(217,72,15,0.15) 0%, rgba(0,0,0,0) 70%)",
                zIndex: -1,
                borderRadius: "50%",
              }}
              visibleFrom="sm"
            />

            <Badge
              size="lg"
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
            >
              Open to work
            </Badge>

            <Title order={1} size={rem(54)} fw={900} lh={1.1}>
              Web & Mobile <br />
              <Text span c="#d9480f" inherit>
                Developer
              </Text>
            </Title>

            <Text size="xl" c="dimmed" maw={600}>
              Привет! Я создаю быстрые сайты, мобильные приложения и интегрирую софт с умной электроникой. Помогаю превращать идеи в рабочий код.
            </Text>

            <Group mt="md">
              <Button
                size="lg"
                color="orange"
                radius="md"
                onClick={() => scrollToSection("projects")}
              >
                Смотреть работы
              </Button>

              <Button
                component="a"
                href="https://t.me/yeeeerniyaz"
                target="_blank"
                size="lg"
                variant="default"
                radius="md"
                leftSection={<IconBrandTelegram size={20} />}
              >
                Написать мне
              </Button>
            </Group>

            <Group mt={40} gap={60}>
              <div>
                <Text fw={900} size="2rem" c="#d9480f">
                  3+
                </Text>
                <Text size="sm" c="dimmed">
                  Года опыта
                </Text>
              </div>
              <div>
                <Text fw={900} size="2rem" c="#d9480f">
                  15+
                </Text>
                <Text size="sm" c="dimmed">
                  Проектов
                </Text>
              </div>
              <div>
                <Text fw={900} size="2rem" c="#d9480f">
                  100%
                </Text>
                <Text size="sm" c="dimmed">
                  Вовлеченность
                </Text>
              </div>
            </Group>
          </Stack>

          <Box id="about" py={60}>
            <Grid gutter={50} align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Title order={2} mb="md">
                  Давайте знакомиться!
                </Title>
                <Text c="dimmed" mb="md">
                  Я Ернияз — разработчик из Алматы с душой инженера. Мой путь в IT начался с увлечения электроникой, сборки механизмов и создания собственных умных устройств. Я люблю, когда сложный код превращается в реальный, осязаемый продукт.
                </Text>
                <Text c="dimmed" mb="md">
                  Для меня программирование — это творчество. Я с одинаковым удовольствием собираю аккуратные интерфейсы на React, пишу логику для Telegram-ботов и настраиваю серверы. Главное — чтобы это решало реальную задачу бизнеса.
                </Text>

                <Stack gap="xs" mt="lg">
                  <Group gap="xs">
                    <IconMapPin size={20} color="orange" />
                    <Text fw={500}>Алматы, Казахстан</Text>
                  </Group>
                  <Group gap="xs">
                    <IconUserCheck size={20} color="orange" />
                    <Text fw={500}>Возраст: 25 лет (Год Змеи 🐍)</Text>
                  </Group>
                  <Group gap="xs">
                    <IconBolt size={20} color="orange" />
                    <Text fw={500}>Увлечения: IoT, Автомобили, Спорт</Text>
                  </Group>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Blockquote
                  color="orange"
                  icon={<IconQuote size={20} />}
                  mt="xl"
                  radius="md"
                  p="xl"
                >
                  "Технологии должны работать на людей, а не наоборот. Моя цель — создавать удобные, красивые и надежные решения, которыми просто приятно пользоваться."
                </Blockquote>
              </Grid.Col>
            </Grid>
          </Box>

          <Title order={2} mb="xl" mt={40}>
            Мой Арсенал
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            {skills.map((skill) => (
              <Paper
                key={skill.label}
                shadow="xs"
                p="xl"
                radius="md"
                withBorder
              >
                <ThemeIcon
                  size={50}
                  radius="md"
                  variant="light"
                  color={skill.color}
                  mb="md"
                >
                  <skill.icon size={28} />
                </ThemeIcon>
                <Text fw={700} size="lg" mt="sm">
                  {skill.label}
                </Text>
                <Text size="sm" c="dimmed">
                  {skill.desc}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>

          <Title order={2} mb="xl" mt={100}>
            Таймлайн
          </Title>
          <Timeline active={2} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconBolt size={12} />}
              title="Инженерия & Электроника"
            >
              <Text c="dimmed" size="sm">
                Начинал с работы с электродвигателями и автоматикой. Научился понимать, как системы работают на аппаратном уровне, заложив крепкий инженерный фундамент.
              </Text>
              <Text size="xs" mt={4}>
                2020 - 2022
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconGitBranch size={12} />}
              title="IT & IoT Старт"
            >
              <Text c="dimmed" size="sm">
                Запуск проекта умного зеркала. Глубокое погружение в Node.js, веб-технологии и администрирование Linux-серверов.
              </Text>
              <Text size="xs" mt={4}>
                2023 - 2025
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconDeviceMobile size={12} />}
              title="Fullstack Разработка"
              lineVariant="dashed"
            >
              <Text c="dimmed" size="sm">
                Коммерческая разработка: создаю веб-сервисы, CRM-системы, Telegram-ботов и современные интерфейсы на React.
              </Text>
              <Text size="xs" mt={4}>
                Сейчас
              </Text>
            </Timeline.Item>
          </Timeline>

          <div id="projects">
            <Title order={2} mb="xl" mt={100}>
              Избранные работы
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mt="md">
              {projectsData.map((project) => (
                <Card
                  key={project.id}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Group justify="space-between" mb="sm" align="flex-start">
                    <Group gap="sm">
                      <ThemeIcon size={40} radius="md" variant="light" color={project.color}>
                        <project.icon size={20} stroke={1.5} />
                      </ThemeIcon>
                      <Text fw={700} size="lg">
                        {project.title}
                      </Text>
                    </Group>
                    {project.isNew && (
                      <Badge color="green" variant="light" size="sm">
                        NEW
                      </Badge>
                    )}
                  </Group>

                  <Text size="sm" c="dimmed" style={{ flexGrow: 1 }} mb="md" lh={1.5}>
                    {project.description}
                  </Text>

                  <Group gap={6} mb="md">
                    {project.tags.map((tag) => (
                      <Badge key={tag} color="gray" variant="outline" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </Group>

                  {project.inDevelopment ? (
                    <Box mt="auto" w="100%">
                      <Badge 
                        color="gray" 
                        variant="light" 
                        size="lg" 
                        w="100%" 
                        radius="md" 
                        style={{ textTransform: 'none', paddingTop: 8, paddingBottom: 8, height: 'auto', fontWeight: 600 }}
                      >
                        В разработке
                      </Badge>
                    </Box>
                  ) : (
                    <Button
                      component="a"
                      href={project.link}
                      target="_blank"
                      variant="light"
                      color={project.color}
                      fullWidth
                      radius="md"
                      mt="auto"
                    >
                      Смотреть проект
                    </Button>
                  )}
                </Card>
              ))}
            </SimpleGrid>
          </div>
        </Container>
      </AppShell.Main>

      <Container
        size="lg"
        py="xl"
        style={{ borderTop: "1px solid #333", marginTop: 80 }}
      >
        <Group justify="space-between">
          <Text c="dimmed" size="sm">
            © 2026 Yerniyaz Talgatuly.
          </Text>
          <Group gap={0} className="hidden sm:flex" visibleFrom="xs">
            <ActionIcon component="a" href="https://github.com/Yeeerniyaz" target="_blank" size="lg" color="gray" variant="subtle">
              <IconBrandGithub size={18} />
            </ActionIcon>
            <ActionIcon component="a" href="https://t.me/yeeeerniyaz" target="_blank" size="lg" color="gray" variant="subtle">
              <IconBrandTelegram size={18} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </AppShell>
  );
}

export default App;