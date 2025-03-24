"use server";
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";
import { getMySession } from "./getSession";
import { STARTUPS_TEST } from "@/sanity/lib/queries";
import { createClient } from "next-sanity";
export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string
) => {
  const session = await getMySession();

  if (!session || !session.id) {
    return parseServerActionResponse({
      error: "Not signed in or missing ID",
      status: "ERROR",
    });
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  );

  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id || "", // هنا نستخدم `session.id` بعد التأكد من أنه موجود
      },
      views: 0,
      pitch: pitch,
    };

    const result = await writeClient.create({ _type: "startup", ...startup });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};

// Define a proper Sanity client with a token
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: false, // Important for mutations
  apiVersion: "2023-01-01",
  token: process.env.SANITY_WRTIE_TOKEN, // Ensure this is in your .env.local
});

export const deletePatchs = async () => {
  try {
    // Fetch all startup documents
    const startups = await client.fetch(STARTUPS_TEST);
    console.log("the startups is : ", JSON.stringify(startups), null);

    if (startups.length === 0) {
      return parseServerActionResponse({ error: "", status: "NO_DOCUMENTS" });
    }

    console.log("Deleting startups...", startups);

    // Delete each startup document
    await Promise.all(
      startups.map((startup: any) => client.delete(startup._id))
    );

    alert(`${startups.length} documents deleted.`);
    return parseServerActionResponse({ error: "", status: "SUCCESS" });
  } catch (error) {
    console.error("Error deleting documents:", error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};

export const createInitialPatchs = async () => {
  const startups = [
    {
      title: "EcoDelivery",
      slug: { current: "eco-delivery" },
      author: { _type: "reference", _ref: "152563513" },
      views: 150,
      description:
        "خدمة توصيل صديقة للبيئة تستخدم الدراجات الكهربائية والتغليف المستدام.",
      category: "Logistics",
      image: "https://images.pexels.com/photos/4388586/pexels-photo-4388586.jpeg",
      pitch:
        "EcoDelivery هو حل للتوصيل المستدام يقلل من البصمة الكربونية.",
    },
    {
      title: "AI Resume Builder",
      slug: { current: "ai-resume-builder" },
      author: { _type: "reference", _ref: "152563513" },
      views: 250,
      description:
        "منصة مدعومة بالذكاء الاصطناعي لإنشاء السير الذاتية الاحترافية بسهولة.",
      category: "CareerTech",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      pitch:
        "نساعدك في إنشاء سيرة ذاتية قوية متوافقة مع أنظمة تتبع المتقدمين (ATS).",
    },
    {
      title: "FitAI",
      slug: { current: "fitai" },
      author: { _type: "reference", _ref: "152563513" },
      views: 340,
      description:
        "مدرب شخصي يعمل بالذكاء الاصطناعي يقدم خطط تمارين وتغذية مخصصة.",
      category: "Health & Fitness",
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
      pitch:
        "FitAI يوفر خطط تمارين ذكية بناءً على بياناتك الصحية الشخصية.",
    },
    {
      title: "SmartFarm",
      slug: { current: "smartfarm" },
      author: { _type: "reference", _ref: "152563513" },
      views: 180,
      description:
        "حلول زراعية ذكية تعتمد على إنترنت الأشياء لمراقبة وتحسين المحاصيل.",
      category: "AgriTech",
      image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
      pitch:
        "نساعد المزارعين على زيادة الإنتاجية باستخدام تقنيات حديثة.",
    },
    {
      title: "RemoteWork Hub",
      slug: { current: "remote-work-hub" },
      author: { _type: "reference", _ref: "152563513" },
      views: 400,
      description:
        "منصة تربط العاملين عن بعد بمساحات العمل المشتركة حول العالم.",
      category: "WorkTech",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
      pitch: "اكتشف أفضل مساحات العمل المشتركة أينما كنت.",
    },
    {
      title: "MindfulMe",
      slug: { current: "mindfulme" },
      author: { _type: "reference", _ref: "152563513" },
      views: 290,
      description:
        "تطبيق للصحة النفسية يوفر جلسات تأمل موجهة وموارد علاجية.",
      category: "Mental Health",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      pitch:
        "MindfulMe يساعدك على تحقيق الهدوء النفسي من خلال التأمل الموجه.",
    },
    {
      title: "EduVR",
      slug: { current: "eduvr" },
      author: { _type: "reference", _ref: "152563513" },
      views: 220,
      description:
        "منصة واقع افتراضي تقدم تجارب تعليمية غامرة.",
      category: "EdTech",
      image: "https://images.pexels.com/photos/4198573/pexels-photo-4198573.jpeg",
      pitch:
        "EduVR يحوّل التعلم التقليدي إلى دروس تفاعلية بالواقع الافتراضي.",
    },
    {
      title: "LegalBot",
      slug: { current: "legalbot" },
      author: { _type: "reference", _ref: "152563513" },
      views: 170,
      description:
        "روبوت ذكاء اصطناعي يقدم استشارات قانونية تلقائية وخدمات توثيق المستندات.",
      category: "LegalTech",
      image: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg",
      pitch:
        "LegalBot يجعل الإجراءات القانونية سهلة وميسّرة بفضل الذكاء الاصطناعي.",
    },
    {
      title: "GreenInvest",
      slug: { current: "greeninvest" },
      author: { _type: "reference", _ref: "152563513" },
      views: 320,
      description:
        "منصة للاستثمار في الشركات الناشئة المستدامة والصديقة للبيئة.",
      category: "FinTech",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
      pitch:
        "GreenInvest يربط المستثمرين برواد الأعمال الذين يدعمون الاستدامة.",
    },
    {
      title: "FoodScan",
      slug: { current: "foodscan" },
      author: { _type: "reference", _ref: "152563513" },
      views: 280,
      description:
        "تطبيق ذكاء اصطناعي يقوم بمسح ملصقات الطعام لاكتشاف المواد المسببة للحساسية والتفاصيل الغذائية.",
      category: "HealthTech",
      image: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg",
      pitch:
        "FoodScan يساعد المستخدمين على اتخاذ قرارات غذائية أكثر صحة بسهولة.",
    },
  ];

  try {
    const results = await Promise.all(
      startups.map((startup) => writeClient.create({ _type: "startup", ...startup }))
    );

    console.log("All Startups Created Successfully");
    return parseServerActionResponse({
      ...results,
      error: "",
      status: "SUCCESS",
    });
    
  } catch (error) {
    console.log("Failed to Create Data");
    console.error(error);
    return parseServerActionResponse({
      error: error,
      status: "ERROR",
    });
  }
};

