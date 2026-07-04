import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// NOTE: Email clients don't understand CSS variables (var(--primary), etc.),
// so theme colors are hardcoded here as hex. Replace these with the actual
// hex values pulled from your globals.css :root theme so it visually matches
// your shadcn theme.
const theme = {
  background: "#f4f4f5", // --muted
  card: "#ffffff", // --card
  border: "#e4e4e7", // --border
  foreground: "#18181b", // --foreground
  mutedForeground: "#71717a", // --muted-foreground
  primary: "#18181b", // --primary
  primaryForeground: "#fafafa", // --primary-foreground
};

export default function ContactNotificationEmail({
  name = "Jane Doe",
  email = "jane@example.com",
  phone = "+1 555 123 4567",
  subject = "Freelance project inquiry",
  message = "Hi, I'd love to talk about a potential collaboration...",
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New message from {name}: {subject}
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
              📬 New Contact Form Submission
            </Heading>
          </Section>

          {/* Body */}
          <Section style={{ padding: "32px" }}>
            <Text
              style={{
                color: theme.mutedForeground,
                fontSize: "13px",
                margin: "0 0 4px 0",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Subject
            </Text>
            <Text
              style={{
                color: theme.foreground,
                fontSize: "17px",
                fontWeight: 600,
                margin: "0 0 24px 0",
              }}
            >
              {subject}
            </Text>

            <Hr style={{ borderColor: theme.border, margin: "0 0 24px 0" }} />

            <Row>
              <Text
                style={{
                  color: theme.mutedForeground,
                  fontSize: "13px",
                  margin: "0 0 4px 0",
                }}
              >
                From
              </Text>
              <Text
                style={{
                  color: theme.foreground,
                  fontSize: "15px",
                  fontWeight: 500,
                  margin: "0 0 16px 0",
                }}
              >
                {name}
              </Text>
            </Row>

            <Row>
              <Text
                style={{
                  color: theme.mutedForeground,
                  fontSize: "13px",
                  margin: "0 0 4px 0",
                }}
              >
                Email
              </Text>
              <Text style={{ margin: "0 0 16px 0" }}>
                <Link
                  href={`mailto:${email}`}
                  style={{
                    color: theme.foreground,
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {email}
                </Link>
              </Text>
            </Row>

            <Row>
              <Text
                style={{
                  color: theme.mutedForeground,
                  fontSize: "13px",
                  margin: "0 0 4px 0",
                }}
              >
                Phone
              </Text>
              <Text style={{ margin: "0 0 16px 0" }}>
                <Link
                  href={`tel:${phone}`}
                  style={{
                    color: theme.foreground,
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {phone}
                </Link>
              </Text>
            </Row>

            <Hr style={{ borderColor: theme.border, margin: "0 0 24px 0" }} />

            <Text
              style={{
                color: theme.mutedForeground,
                fontSize: "13px",
                margin: "0 0 8px 0",
              }}
            >
              Message
            </Text>
            <Text
              style={{
                backgroundColor: theme.background,
                borderRadius: "10px",
                color: theme.foreground,
                fontSize: "15px",
                lineHeight: "1.6",
                margin: 0,
                padding: "16px",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
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
              Sent from your portfolio contact form
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
