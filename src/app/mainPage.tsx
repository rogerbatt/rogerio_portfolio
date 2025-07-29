import { FadeText } from "@/components/fade-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { useTranslation } from "react-i18next";

const BLUR_FADE_DELAY = 0.04;

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                yOffset={8}
                text={`${t("hello")} ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <FadeText
                  translationKey="description"
                  className="max-w-[600px] md:text-xl"
                />
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <FadeText className="text-xl font-bold" translationKey="about" />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            <FadeText translationKey="summary" />
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <FadeText translationKey="workxp" className="text-xl font-bold" />
          </BlurFade>

          {DATA.work.map((work, id) => {
            const title = t(`works.${work.key}.title`);
            const description = t(`works.${work.key}.description`);
            const period = t(`works.${work.key}.period`);

            return (
              <BlurFade key={work.key} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={title}
                  subtitle={work.company}
                  href={work.href}
                  badges={work.badges}
                  period={period}
                  description={description}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <FadeText
              translationKey="education"
              className="text-xl font-bold"
            />
          </BlurFade>

          {DATA.education.map((education, id) => {
            const degree = t(`educationExperience.${education.key}.degree`);

            return (
              <BlurFade
                key={education.key}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <FadeText translationKey="skills" className="text-xl font-bold" />
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <FadeText
                  translationKey="myProjects"
                  className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
                />

                <FadeText
                  translationKey="titleProjects"
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                />

                <FadeText
                  translationKey="descriptionProjects"
                  className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                />
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => {
              const title = t(`projects.${project.key}.title`);
              const description = t(`projects.${project.key}.description`);
              const dates = t(`projects.${project.key}.dates`);

              return (
                <BlurFade
                  key={project.key}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.key}
                    title={title}
                    description={description}
                    dates={dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
