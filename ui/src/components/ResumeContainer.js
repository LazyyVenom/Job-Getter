import React, { forwardRef } from "react";
import EditableField from "./EditableField";

const ResumeContainer = forwardRef(
  ({ resumeData, editMode, onUpdateField, onFieldFocus, onFieldBlur }, ref) => {
    return (
      <div ref={ref} className="max-w-4xl mx-0 p-0 bg-transparent">
        {/* Page 1 */}
        <div className={`a4-page ${editMode ? "edit-mode-active" : ""}`}>
          {/* Header */}
          <EditableField
            tag="h1"
            field="name"
            value={resumeData.name}
            onUpdate={onUpdateField}
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="text-center text-22pt mb-1 mt-0"
          />

          <EditableField
            tag="div"
            field="contact"
            value={resumeData.contact}
            onUpdate={onUpdateField}
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="text-center text-10-5pt mb-1"
          />

          <EditableField
            tag="div"
            field="links"
            value={resumeData.links}
            onUpdate={onUpdateField}
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="text-center text-10-5pt mb-1"
          />

          <hr className="border-none border-t border-gray-700 my-4" />

          {/* Experience */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Experience
          </h2>

          <div className="no-break">
            <p className="my-2 leading-relaxed">
              <EditableField
                tag="span"
                field="job1-title"
                value={resumeData["job1-title"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="font-bold"
              />
              <EditableField
                tag="span"
                field="job1-date"
                value={resumeData["job1-date"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="float-right italic"
              />
            </p>
            <ul className="my-1 ml-5">
              <EditableField
                tag="li"
                field="job1-desc1"
                value={resumeData["job1-desc1"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
              <EditableField
                tag="li"
                field="job1-desc2"
                value={resumeData["job1-desc2"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
              <EditableField
                tag="li"
                field="job1-desc3"
                value={resumeData["job1-desc3"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
            </ul>
          </div>

          <div className="no-break">
            <p className="my-2 leading-relaxed">
              <EditableField
                tag="span"
                field="job2-title"
                value={resumeData["job2-title"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="font-bold"
              />
              <EditableField
                tag="span"
                field="job2-date"
                value={resumeData["job2-date"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="float-right italic"
              />
            </p>
            <ul className="my-1 ml-5">
              <EditableField
                tag="li"
                field="job2-desc1"
                value={resumeData["job2-desc1"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
              <EditableField
                tag="li"
                field="job2-desc2"
                value={resumeData["job2-desc2"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
              <EditableField
                tag="li"
                field="job2-desc3"
                value={resumeData["job2-desc3"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
            </ul>
          </div>
        </div>

        {/* Page 2 */}
        <div
          className={`a4-page page-break ${editMode ? "edit-mode-active" : ""}`}
        >
          {/* Continue Experience */}
          <h2 className="text-13pt mt-0 mb-2 border-b border-gray-300 pb-1">
            Experience (Continued)
          </h2>

          <div className="no-break">
            <p className="my-2 leading-relaxed">
              <EditableField
                tag="span"
                field="job3-title"
                value={resumeData["job3-title"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="font-bold"
              />
              <EditableField
                tag="span"
                field="job3-date"
                value={resumeData["job3-date"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="float-right italic"
              />
            </p>
            <ul className="my-1 ml-5">
              <EditableField
                tag="li"
                field="job3-desc1"
                value={resumeData["job3-desc1"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
              <EditableField
                tag="li"
                field="job3-desc2"
                value={resumeData["job3-desc2"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
            </ul>
          </div>

          <div className="no-break">
            <p className="my-2 leading-relaxed">
              <EditableField
                tag="span"
                field="job4-title"
                value={resumeData["job4-title"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="font-bold"
              />
              <EditableField
                tag="span"
                field="job4-date"
                value={resumeData["job4-date"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="float-right italic"
              />
            </p>
            <ul className="my-1 ml-5">
              <EditableField
                tag="li"
                field="job4-desc1"
                value={resumeData["job4-desc1"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
            </ul>
          </div>

          {/* Projects */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Projects
          </h2>

          <div className="no-break">
            <p className="my-2 leading-relaxed">
              <EditableField
                tag="span"
                field="project1-title"
                value={resumeData["project1-title"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="font-bold"
              />
              <EditableField
                tag="span"
                field="project1-tech"
                value={resumeData["project1-tech"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="float-right italic"
              />
            </p>
            <ul className="my-1 ml-5">
              <EditableField
                tag="li"
                field="project1-desc1"
                value={resumeData["project1-desc1"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
              <EditableField
                tag="li"
                field="project1-desc2"
                value={resumeData["project1-desc2"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
              <EditableField
                tag="li"
                field="project1-desc3"
                value={resumeData["project1-desc3"]}
                onUpdate={onUpdateField}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
            </ul>
          </div>

          {/* Skills */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Skills
          </h2>
          <EditableField
            tag="p"
            field="skills-languages"
            value={resumeData["skills-languages"]}
            onUpdate={onUpdateField}
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="my-2 leading-relaxed"
          />
          <EditableField
            tag="p"
            field="skills-ai"
            value={resumeData["skills-ai"]}
            onUpdate={onUpdateField}
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="my-2 leading-relaxed"
          />

          {/* Education */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Education
          </h2>
          <EditableField
            tag="p"
            field="education-btech"
            value={resumeData["education-btech"]}
            onUpdate={onUpdateField}
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="my-2 leading-relaxed"
          />

          {/* Accomplishments */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Accomplishments
          </h2>
          <ul className="my-1 ml-5">
            <EditableField
              tag="li"
              field="accomplish1"
              value={resumeData.accomplish1}
              onUpdate={onUpdateField}
              onFocus={onFieldFocus}
              onBlur={onFieldBlur}
              editMode={editMode}
              className="mb-1 leading-relaxed"
            />
            <EditableField
              tag="li"
              field="accomplish2"
              value={resumeData.accomplish2}
              onUpdate={onUpdateField}
              onFocus={onFieldFocus}
              onBlur={onFieldBlur}
              editMode={editMode}
              className="mb-1 leading-relaxed"
            />
          </ul>
        </div>
      </div>
    );
  }
);

ResumeContainer.displayName = "ResumeContainer";

export default ResumeContainer;
