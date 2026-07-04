import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactAutoReplyEmailProps {
  name: string;
  subject: string;
  message: string;
  siteName?: string;
  siteUrl?: string;
}

// NOTE: hardcode your actual shadcn theme hex values here — email clients
// can't read CSS variables like var(--primary).
const theme = {
  background: "#f4f4f5", // --muted
  card: "#ffffff", // --card
  border: "#e4e4e7", // --border
  foreground: "#18181b", // --foreground
  mutedForeground: "#71717a", // --muted-foreground
  primary: "#18181b", // --primary
  primaryForeground: "#fafafa", // --primary-foreground
};

export default function ContactAutoReplyEmail({
  name = "Jane Doe",
  subject = "Freelance project inquiry",
  message = "Hi, I'd love to talk about a potential collaboration...",
  siteName = "Adnan Bin Akhlas - Portfolio",
  siteUrl = "https://adnan-b-akhlas.vercel.app",
}: ContactAutoReplyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Thanks for reaching out, {name.split(" ")[0]} — I got your message.
      </Preview>
      <Body
        style={{
          backgroundColor: theme.background,
          margin: 0,
          padding: "32px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
            borderRadius: "16px",
            margin: "0 auto",
            maxWidth: "560px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Section
            style={{
              backgroundColor: theme.primary,
              padding: "24px 32px",
            }}
          >
            <Heading
              as="h2"
              style={{
                color: theme.primaryForeground,
                fontSize: "18px",
                fontWeight: 600,
                margin: 0,
              }}
            >
              ✅ Message received
            </Heading>
          </Section>

          {/* Body */}
          <Section style={{ padding: "32px" }}>
            <Text
              style={{
                color: theme.foreground,
                fontSize: "16px",
                lineHeight: "1.6",
                margin: "0 0 16px 0",
              }}
            >
              Hi {name.split(" ")[0]},
            </Text>
            <Text
              style={{
                color: theme.foreground,
                fontSize: "16px",
                lineHeight: "1.6",
                margin: "0 0 24px 0",
              }}
            >
              Thanks for getting in touch! This is just a quick note to confirm
              I&apos;ve received your message and will get back to you as soon
              as I can — usually within a day or two.
            </Text>

            <Hr style={{ borderColor: theme.border, margin: "0 0 24px 0" }} />

            <Text
              style={{
                color: theme.mutedForeground,
                fontSize: "13px",
                margin: "0 0 4px 0",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Your message
            </Text>
            <Text
              style={{
                color: theme.foreground,
                fontSize: "15px",
                fontWeight: 600,
                margin: "0 0 8px 0",
              }}
            >
              {subject}
            </Text>
            <Text
              style={{
                backgroundColor: theme.background,
                borderRadius: "10px",
                color: theme.foreground,
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0 0 24px 0",
                padding: "16px",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>

            <Text
              style={{
                color: theme.foreground,
                fontSize: "16px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Talk soon,
              <br />
              {siteName}
            </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              borderTop: `1px solid ${theme.border}`,
              padding: "16px 32px",
            }}
          >
            <Text
              style={{
                color: theme.mutedForeground,
                fontSize: "12px",
                margin: 0,
                textAlign: "center",
              }}
            >
              This is an automated confirmation from{" "}
              <Link href={siteUrl} style={{ color: theme.mutedForeground }}>
                {siteName}
              </Link>
              . No need to reply to this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
