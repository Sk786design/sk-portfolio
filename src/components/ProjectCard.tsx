"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const media = images?.[0] || "";

  /*
   * Support all common video formats including MOV.
   */
  const isVideo = /\.(mp4|webm|ogg|mov)(\?|$)/i.test(media);

  /*
   * Mobile performance:
   * Only attach the video source when the card is close to
   * the viewport. This prevents 10+ videos from loading
   * simultaneously on mobile.
   */
  const mediaRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!isVideo || !mediaRef.current) return;

    const video = mediaRef.current;

    if (!("IntersectionObserver" in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isVideo]);

  /*
   * Cloudinary can convert the MOV to MP4 on delivery.
   * This makes the POCO video much safer on mobile browsers.
   */
  const videoSrc = media.replace(
    "/video/upload/",
    "/video/upload/f_mp4/"
  );

  return (
    <Column fillWidth gap="m">
      {media &&
        (isVideo ? (
          <video
            ref={mediaRef}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            playsInline
            muted
            preload="none"
            poster=""
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16 / 9",
              objectFit: "cover",
              borderRadius: "12px",
              background: "#000",
              display: "block",
              maxWidth: "100%",
            }}
            onContextMenu={(e) => e.preventDefault()}
          >
            {shouldLoadVideo && (
              <source
                src={videoSrc}
                type="video/mp4"
              />
            )}

            Your browser does not support video playback.
          </video>
        ) : (
          <img
            src={media}
            alt={title}
            draggable={false}
            loading="lazy"
            onContextMenu={(e) => e.preventDefault()}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16 / 9",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block",
              maxWidth: "100%",
              userSelect: "none",
            }}
          />
        ))}

      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading
              as="h2"
              wrap="balance"
              variant="heading-strong-xl"
            >
              {title}
            </Heading>
          </Flex>
        )}

        {(avatars?.length > 0 ||
          description?.trim() ||
          content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && (
              <AvatarGroup
                avatars={avatars}
                size="m"
                reverse
              />
            )}

            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {description}
              </Text>
            )}

            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{
                    margin: "0",
                    width: "fit-content",
                  }}
                  href={href}
                >
                  <Text variant="body-default-s">
                    Read case study
                  </Text>
                </SmartLink>
              )}

              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{
                    margin: "0",
                    width: "fit-content",
                  }}
                  href={link}
                >
                  <Text variant="body-default-s">
                    View project
                  </Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
