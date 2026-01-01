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
} from "@tabler/icons-react";

const projectsData = [
  {
    id: 5,
    title: "Mobile Store App",
    description:
      "Кроссплатформенное мобильное приложение на React Native. Удобный каталог, корзина и профиль пользователя.",
    tags: ["React Native", "Expo", "Mobile"],
    color: "teal",
    link: "#",
    isNew: true,
  },
  {
    id: 4,
    title: "DropIt App",
    description:
      "Современный файловый менеджер с поддержкой Drag-and-Drop. Быстрая загрузка файлов и удобный интерфейс.",
    tags: ["React", "Mantine", "Node.js", "Express", "MongoDB"],
    color: "cyan",
    link: "https://github.com/Yeeerniyaz/dropit",
  },
  {
    id: 2,
    title: "Smart Mirror VECTOR",
    description:
      "IoT-устройство на базе Linux. Интерактивное зеркало с голосовым ассистентом и интеграцией в Умный дом.",
    tags: ["IoT", "Linux", "Node.js", "React", "React Native", "Python", "SQL"],
    color: "violet",
    link: "#",
  },
  {
    id: 1,
    title: "Business Automation CRM",
    description:
      "Комплексная система управления заявками. Админ-панель, аналитика и Telegram-бот.",
    tags: ["Python", "Flask", "SQL"],
    color: "blue",
    link: "#",
  },
];

const skills = [
  {
    icon: IconBrandReact,
    label: "React.js",
    desc: "SPA, Hooks, Vite",
    color: "blue",
  },
  {
    icon: IconDeviceMobile,
    label: "React Native",
    desc: "iOS & Android Apps",
    color: "teal",
  },
  {
    icon: IconBrandPython,
    label: "Backend",
    desc: "Python, Flask, Node.js",
    color: "yellow",
  },
  {
    icon: IconCpu,
    label: "IoT & Hard",
    desc: "Arduino, ESP32, Linux",
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
              Создаю быстрые сайты, мобильные приложения (React Native) и умную
              электронику. Превращаю сложные задачи в рабочий код.
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
                  Ответственность
                </Text>
              </div>
            </Group>
          </Stack>

          <Box id="about" py={60}>
            <Grid gutter={50} align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Title order={2} mb="md">
                  Кто такой Ернияз?
                </Title>
                <Text c="dimmed" mb="md">
                  Я разработчик из Алматы с бэкграундом инженера-механика. Мой
                  путь начался не с "Hello World", а с ремонта сложной
                  электроники и службы в армии, что научило меня железной
                  дисциплине.
                </Text>
                <Text c="dimmed" mb="md">
                  Я не просто пишу код — я понимаю, как работают системы
                  изнутри. От пайки микроконтроллеров для Умного дома до
                  архитектуры сложных облачных приложений.
                </Text>

                <Stack gap="xs" mt="lg">
                  <Group gap="xs">
                    <IconMapPin size={20} color="orange" />
                    <Text fw={500}>Алматы, Казахстан</Text>
                  </Group>
                  <Group gap="xs">
                    <IconUserCheck size={20} color="orange" />
                    <Text fw={500}>Возраст: 25 года (Год Змеи 🐍)</Text>
                  </Group>
                  <Group gap="xs">
                    <IconBolt size={20} color="orange" />
                    <Text fw={500}>Хобби: Авто, Умный дом, Спорт</Text>
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
                  "Я ненавижу глупость и ценю практичность. Моя цель — создавать
                  решения, которые работают надежно, как швейцарские часы."
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
              title="Инженер-электрик & Армия"
            >
              <Text c="dimmed" size="sm">
                Работал с электродвигателями и автоматикой. Служба в армии дала
                понимание, что такое настоящая дисциплина и ответственность.
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
                Запуск проекта Magic Mirror. Изучение Node.js и Linux.
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
                Коммерческая разработка на React, React Native и Python.
              </Text>
              <Text size="xs" mt={4}>
                Сейчас
              </Text>
            </Timeline.Item>
          </Timeline>

          {/* ID для скролла */}
          <div id="projects">
            <Title order={2} mb="xl" mt={100}>
              Избранные работы
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              {projectsData.map((project) => (
                <Card
                  key={project.id}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Group justify="space-between" mb="xs">
                    <Text fw={700} size="lg">
                      {project.title}
                    </Text>
                    {project.isNew && (
                      <Badge color="green" variant="filled">
                        NEW
                      </Badge>
                    )}
                  </Group>

                  <Text size="sm" c="dimmed" mih={60}>
                    {project.description}
                  </Text>

                  <Group gap={6} mt="md" mb="md">
                    {project.tags.map((tag) => (
                      <Badge key={tag} color="gray" variant="outline" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </Group>

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
                    Смотреть
                  </Button>
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
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub size={18} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTelegram size={18} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </AppShell>
  );
}

export default App;
