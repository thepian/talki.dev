import { config, fields, collection } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

export default config({
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
  cloud: {
    project: "milo-astro-theme/milo-astro-theme",
  },
  ui: {
    brand: { name: "Talki.dev theme" },
  },
  collections: {
    caseStudies: collection({
      label: "Case Studies",
      slugField: "title",
      path: "src/content/caseStudies/**",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "The title of the case study",
            validation: { isRequired: true },
          },
          slug: {
            label: "SEO-friendly slug",
            description:
              "This will define the file/folder slug for this case study",
          },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { isRequired: true },
        }),
        cardImage: fields.image({
          label: "Card Image",
          directory: "public/caseStudies",
          publicPath: "/caseStudies/",
          validation: { isRequired: true },
        }),
        greyImage: fields.image({
          label: "Grey Image",
          directory: "public/caseStudies",
          publicPath: "/caseStudies/",
          validation: { isRequired: true },
        }),
        heroImage: fields.image({
          label: "Hero Image",
          directory: "public/caseStudies",
          publicPath: "/caseStudies/",
          validation: { isRequired: true },
        }),
        roles: fields.array(fields.text({ label: "Role" }), {
          label: "Roles",
          itemLabel: (props) => props.value,
        }),
        introduction: fields.text({
          label: "Introduction",
          multiline: true,
          validation: { isRequired: true },
        }),
        aboutProject: fields.object(
          {
            leftCol: fields.text({
              label: "Left Column (HTML allowed)",
              multiline: true,
              validation: { isRequired: true },
            }),
            rightCol: fields.text({
              label: "Right Column (HTML allowed)",
              multiline: true,
              validation: { isRequired: true },
            }),
          },
          {
            label: "About the Project",
          }
        ),
        whatWeDid: fields.object(
          {
            leftCol: fields.text({
              label: "Left Column (HTML allowed)",
              multiline: true,
              validation: { isRequired: true },
            }),
            rightCol: fields.text({
              label: "Right Column (HTML allowed)",
              multiline: true,
              validation: { isRequired: true },
            }),
          },
          {
            label: "What We Did",
          }
        ),
        images: fields.array(
          fields.image({
            label: "Image",
            directory: "public/caseStudies",
            publicPath: "/caseStudies/",
          }),
          {
            label: "Images",
          }
        ),
        clientFeedback: fields.array(
          fields.object({
            blockquote: fields.text({ label: "Blockquote" }),
            figcaption: fields.text({ label: "Figcaption" }),
            cite: fields.text({ label: "Cite" }),
          }),
          {
            label: "Client Feedback",
            itemLabel: () => "Client Feedback",
          }
        ),
        body: fields.markdoc({
          label: "Body (Not required)",
          extension: "md",
          components: {
            video: block({
              label: "Video",
              schema: {
                src: fields.file({
                  label: "Video file",
                  directory: "public/videos",
                  publicPath: "/videos/",
                }),
                poster: fields.image({
                  label: "Poster image (optional)",
                  directory: "public/videos",
                  publicPath: "/videos/",
                }),
                controls: fields.checkbox({ label: "Controls", defaultValue: true }),
                autoplay: fields.checkbox({ label: "Autoplay (muted)", defaultValue: false }),
                loop: fields.checkbox({ label: "Loop", defaultValue: false }),
              },
            }),
          },
        }),
      },
    }),
  },
});
